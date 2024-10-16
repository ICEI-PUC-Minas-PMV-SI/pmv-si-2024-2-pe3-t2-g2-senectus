import { format, getDaysInMonth } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { DesktopCalendarStyle } from './DesktopCalendarStyle'
import { theme } from '../../../themes/theme'
import { ReactNode, useState, useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { CalendarContextProps } from './AppResponsiveCalendar'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'

interface AppCalendarProps<T extends CalendarEventEntity> {
  daysWeek: string[]
  onOpenMenu: (item: CollectionEventsOnDay<T>) => ReactNode
  list: CollectionEventsOnDay<T>[]
}

export function AppDesktopCalendar<T extends CalendarEventEntity>(
  props: AppCalendarProps<T>
) {
  const [sideMenuContext, setSideMenuContext] = useState<
    CalendarContextProps<T>
  >({})

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const actualDay = new Date(
    format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`
  )
  const firstWeekMonthDay = new Date(format(actualDay, 'MMMM yyyy')).getDay()

  const daysInTheMonth: number[] = []
  for (let i = 1; i <= getDaysInMonth(actualDay); i++) daysInTheMonth.push(i)
  const availableRows = Math.ceil(daysInTheMonth.length / 7)

  useEffect(() => {
    if (sideMenuContext.isOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')

    return () => document.body.classList.remove('no-scroll')
  }, [sideMenuContext, setSideMenuContext])

  return (
    <DesktopCalendarStyle>
      {sideMenuContext.isOpen && sideMenuContext.ctx && (
        <div className="side-bar-wrapper">
          <section
            className={`side-bar ${sideMenuContext.isOpen ? 'appear-from-right-animation' : ''}`}
          >
            <header>
              <button
                onClick={() => {
                  setSideMenuContext({
                    ctx: undefined,
                    isOpen: false
                  })
                }}
              >
                <FaXmark />
              </button>
            </header>
            <div className="content">
              {props.onOpenMenu(sideMenuContext.ctx)}
            </div>
          </section>
        </div>
      )}

      <div className="calendar-days">
        {props.daysWeek.map((day) => (
          <p key={uuid()}>{day}</p>
        ))}
      </div>

      <table>
        <tbody>
          {Array.from({ length: availableRows }).map((_, rowIndex) => (
            <tr key={uuid()}>
              {props.daysWeek.map((_, dayIndex) => {
                const dayInMonthIndex =
                  dayIndex + rowIndex * 7 - firstWeekMonthDay
                const hasMoreThan32Days =
                  dayInMonthIndex > daysInTheMonth.length - 1
                if (hasMoreThan32Days) {
                  return <td key={uuid()} className="empty-day"></td>
                }

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
                  firstWeekMonthDay > dayIndex + rowIndex * 7
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

                const collectionOfEvents =
                  props.list[daysInTheMonth[dayInMonthIndex]]
                const availableEvents = collectionOfEvents?.events?.length ?? 0
                const displayText =
                  availableEvents > 0
                    ? `Você tem ${
                        availableEvents > 10 ? '+10' : availableEvents
                      } compromisso${availableEvents > 1 ? 's' : ''}`
                    : ''
                const isActualDay =
                  actualDay.getDate() === daysInTheMonth[dayInMonthIndex]

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
                          setSideMenuContext({
                            ctx: collectionOfEvents,
                            isOpen: true
                          })
                      }}
                      className={`available-events-btn ${availableEvents > 0 ? 'btn-enabled' : 'btn-disabled'}`}
                    >
                      <small className="day-number">
                        {daysInTheMonth[dayInMonthIndex]}
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
