import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { DesktopCalendarStyle } from './DesktopCalendarStyle'
import { theme } from '../../../themes/theme'
import {
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo
} from 'react'
import { FaAngleLeft, FaAngleRight, FaXmark } from 'react-icons/fa6'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { CalendarContextProps } from './AppResponsiveCalendar'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { AppButtonActionRect } from '../Buttons/AppButtonActionRect'
import { ptBR as locale } from 'date-fns/locale'
import { firstLetterOnUpperCase } from '@core/utils/firstLetterOnUppercase'
import { AvoidDayOverflowService } from '@core/services/calendar/AvoidDayOverflowService'
import { GetQuantityEventsService } from '@core/services/calendar/GetQuantityEventsService'
import { BuildDefaultDayMessageService } from '@core/services/calendar/BuildDefaultDayMessageService'
import {
  HandleMonthChangeService,
  TimeProps
} from '@core/services/calendar/HandleMonthChangeService'

interface AppCalendarProps<T extends CalendarEventEntity> {
  daysWeek: string[]
  onOpenMenu: (item: CollectionEventsOnDay<T>) => ReactNode
  list: CollectionEventsOnDay<T>[]
  messageBuilder?: (eventsLength: number) => string
  sideMenuContext?: CalendarContextProps<T>
  setSideMenuContext?: Dispatch<SetStateAction<CalendarContextProps<T>>>
  header?: ReactNode
}

function AppCalendar<T extends CalendarEventEntity>(
  props: Replace<
    AppCalendarProps<T>,
    {
      sideMenuContext: CalendarContextProps<T>
      setSideMenuContext: Dispatch<SetStateAction<CalendarContextProps<T>>>
    }
  >
) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const memoizedTime: TimeProps = useMemo(() => {
    return HandleMonthChangeService.initialStart(timezone)
  }, [timezone])
  const [time, setTime] = useState<TimeProps>(memoizedTime)

  const changeMonth = (shouldDecrease?: boolean) => {
    const newTimeValue = HandleMonthChangeService.exec(
      time.monthRef,
      timezone,
      shouldDecrease
    )
    return { ...time, ...newTimeValue }
  }

  const onPrevMonth = () => {
    setTime(() => changeMonth(true))
  }
  const onNextMonth = () => {
    setTime(() => changeMonth())
  }

  useEffect(() => {
    if (props.sideMenuContext.isOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')

    return () => document.body.classList.remove('no-scroll')
  }, [props.sideMenuContext, props.setSideMenuContext])

  return (
    <DesktopCalendarStyle>
      {props.sideMenuContext.isOpen && props.sideMenuContext.ctx && (
        <div className="side-bar-wrapper">
          <section
            className={`side-bar ${props.sideMenuContext.isOpen ? 'appear-from-right-animation' : ''}`}
          >
            <header>
              <button
                onClick={() => {
                  props.setSideMenuContext({
                    ctx: undefined,
                    isOpen: false
                  })
                }}
              >
                <FaXmark />
              </button>
            </header>
            <div className="content">
              {props.onOpenMenu(props.sideMenuContext.ctx)}
            </div>
          </section>
        </div>
      )}

      <div className="calendar-header">
        <div className="date-info">
          <h3>
            {firstLetterOnUpperCase(format(time.monthRef, 'MMMM', { locale }))}{' '}
            de {format(time.monthRef, 'yyyy')}
          </h3>
          <div>
            <AppButtonActionRect icon={<FaAngleLeft />} onClick={onPrevMonth} />
            <AppButtonActionRect
              icon={<FaAngleRight />}
              onClick={onNextMonth}
            />
          </div>
        </div>

        {props.header}
      </div>
      <div className="calendar-days">
        {props.daysWeek.map((day) => (
          <p key={uuid()}>{day}</p>
        ))}
      </div>

      <table>
        <tbody>
          {Array.from({ length: time.availableRows }).map((_, rowIndex) => (
            <tr key={uuid()}>
              {props.daysWeek.map((_, dayIndex) => {
                const dayInMonthIndex =
                  dayIndex + rowIndex * 7 - time.firstWeekMonthDay
                const node = AvoidDayOverflowService.exec(
                  dayInMonthIndex,
                  time.daysInTheMonth.length - 1
                )
                if (node) return node

                const isFirstRow = rowIndex === 0
                const isFirstDayWeek = dayIndex === 0

                const isMidDayWeek = dayIndex > 0
                const isMidRow = rowIndex > 0

                const yBorder = isFirstRow
                  ? {
                      borderTop: `1px solid ${theme.color.secondaryColor}`,
                      borderBottom: `1px solid ${theme.color.secondaryColor}`
                    }
                  : {}
                const xBorder = isFirstDayWeek
                  ? {
                      borderLeft: `1px solid ${theme.color.secondaryColor}`,
                      borderRight: `1px solid ${theme.color.secondaryColor}`
                    }
                  : {}
                const rightBorder = isMidDayWeek
                  ? {
                      borderRight: `1px solid ${theme.color.secondaryColor}`
                    }
                  : {}
                const bottomBorder = isMidRow
                  ? {
                      borderBottom: `1px solid ${theme.color.secondaryColor}`
                    }
                  : {}

                const daysOnThePreviousMonth =
                  time.firstWeekMonthDay > dayIndex + rowIndex * 7
                if (daysOnThePreviousMonth)
                  return (
                    <td
                      key={uuid()}
                      style={{
                        ...yBorder,
                        ...xBorder,
                        ...rightBorder,
                        ...rightBorder,
                        ...bottomBorder
                      }}
                    ></td>
                  )

                const dayInTheMonth = time.daysInTheMonth[dayInMonthIndex]
                const collectionOfEvents = GetQuantityEventsService.exec(
                  props.list,
                  dayInTheMonth
                )
                const availableEvents = collectionOfEvents?.events?.length ?? 0

                const displayText = props.messageBuilder
                  ? props.messageBuilder(availableEvents)
                  : BuildDefaultDayMessageService.exec(availableEvents)

                const isActualDay =
                  time.actualDay.getTime() === dayInTheMonth.getTime()
                return (
                  <td
                    key={uuid()}
                    style={
                      isActualDay
                        ? {
                            border: `2px solid ${theme.color.primaryColor}`
                          }
                        : {
                            ...yBorder,
                            ...xBorder,
                            ...rightBorder,
                            ...rightBorder,
                            ...bottomBorder
                          }
                    }
                  >
                    <div
                      role="button"
                      onClick={() => {
                        if (
                          collectionOfEvents &&
                          collectionOfEvents.events.length > 0
                        )
                          props.setSideMenuContext({
                            ctx: collectionOfEvents,
                            isOpen: true
                          })
                      }}
                      className={`available-events-btn ${availableEvents > 0 ? 'btn-enabled' : 'btn-disabled'}`}
                    >
                      <small className="day-number">
                        {dayInTheMonth.getDate()}
                      </small>
                      <p className="day-text">
                        {displayText.length > 0 ? displayText : ''}
                      </p>
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </DesktopCalendarStyle>
  )
}

export function AppDesktopCalendar<T extends CalendarEventEntity>(
  props: AppCalendarProps<T>
) {
  const [sideMenuContext, setSideMenuContext] = useState<
    CalendarContextProps<T>
  >({})
  if (props.sideMenuContext && props.setSideMenuContext)
    return (
      <AppCalendar
        {...props}
        sideMenuContext={props.sideMenuContext}
        setSideMenuContext={props.setSideMenuContext}
      />
    )

  return (
    <AppCalendar
      {...props}
      sideMenuContext={sideMenuContext}
      setSideMenuContext={setSideMenuContext}
    />
  )
}
