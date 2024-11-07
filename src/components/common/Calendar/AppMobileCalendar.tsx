import { format } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import { v4 as uuid } from 'uuid'
import { theme } from '../../../themes/theme'
import { ReactNode, useState, useRef, useEffect, useMemo } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { MobileCalendarStyle } from './MobileCalendarStyle'
import { CalendarContextProps } from './AppResponsiveCalendar'
import Image from 'next/image'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { firstLetterOnUpperCase } from '@core/utils/firstLetterOnUppercase'
import { AppButtonActionRect } from '../Buttons/AppButtonActionRect'
import { BuildDefaultDayMessageService } from '@core/services/calendar/BuildDefaultDayMessageService'
import { AvoidDayOverflowService } from '@core/services/calendar/AvoidDayOverflowService'
import { GetQuantityEventsService } from '@core/services/calendar/GetQuantityEventsService'
import {
  HandleMonthChangeService,
  TimeProps
} from '@core/services/calendar/HandleMonthChangeService'

interface AppCalendarProps<T extends CalendarEventEntity> {
  daysWeek: string[]
  onOpenMenu: (item: CollectionEventsOnDay<T>) => ReactNode
  list: CollectionEventsOnDay<T>[]
  messageBuilder?: (eventsLength: number) => string
  emptyListMessage?: string
  header?: ReactNode
}

export function AppMobileCalendar<T extends CalendarEventEntity>(
  props: AppCalendarProps<T>
) {
  const carousel = useRef<HTMLUListElement>(null)
  const [menuContext, setMenuContext] = useState<
    Omit<CalendarContextProps<T>, 'isOpen'>
  >({})

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
    if (carousel.current) carousel.current.scrollLeft = 0
  }
  const onNextMonth = () => {
    setTime(() => changeMonth())
    if (carousel.current) carousel.current.scrollLeft = 0
  }

  const onLeftClick = () => {
    if (!carousel.current) return

    const currentOffset = carousel.current?.offsetWidth ?? 0
    carousel.current.scrollLeft -= currentOffset
  }

  const onRightClick = () => {
    if (!carousel.current) return
    const currentOffset = carousel.current?.offsetWidth ?? 0
    carousel.current.scrollLeft += currentOffset
  }

  useEffect(() => {
    if (
      carousel.current &&
      time.actualDay.getFullYear() === time.monthRef.getFullYear() &&
      time.actualDay.getMonth() === time.monthRef.getMonth()
    ) {
      const currentOffset = carousel.current?.offsetWidth ?? 0
      const cardNumber = currentOffset / 96
      carousel.current.scrollLeft =
        currentOffset * (time.actualDay.getDate() / cardNumber) - currentOffset
    }

    const actualDayInMonth = time.actualDay.getDate()
    setMenuContext({
      ctx: props.list[actualDayInMonth - 1],
      selectedDay: actualDayInMonth
    })
  }, [props.list, time.actualDay])

  return (
    <MobileCalendarStyle>
      <div className="calendar-header">
        <div className="date-info">
          <AppButtonActionRect icon={<FaAngleLeft />} onClick={onPrevMonth} />
          <h3>
            {firstLetterOnUpperCase(format(time.monthRef, 'MMMM', { locale }))}{' '}
            de {format(time.monthRef, 'yyyy')}
          </h3>
          <AppButtonActionRect icon={<FaAngleRight />} onClick={onNextMonth} />
        </div>

        {props.header}
      </div>

      <div className="calendar">
        <button className="carousel-btn left" onClick={onLeftClick}>
          <FaAngleLeft />
        </button>
        <ul ref={carousel}>
          {Array.from({ length: time.availableRows }).map((_, rowIndex) =>
            props.daysWeek.map((_, dayIndex) => {
              const dayInMonthIndex = dayIndex + rowIndex * 7
              const node = AvoidDayOverflowService.exec(
                dayInMonthIndex,
                time.daysInTheMonth.length - 1
              )
              if (node) return node

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
              const actualDayBorder = isActualDay
                ? { border: `2px solid ${theme.color.secondaryColor}` }
                : {}
              const firstDayBorder =
                dayIndex == 0
                  ? { border: `1px solid ${theme.color.secondaryColor}` }
                  : {}
              const midDayBorder =
                dayIndex > 0
                  ? {
                      borderTop: `1px solid ${theme.color.secondaryColor}`,
                      borderRight: `1px solid ${theme.color.secondaryColor}`,
                      borderBottom: `1px solid ${theme.color.secondaryColor}`
                    }
                  : {}

              return (
                <li key={uuid()}>
                  <p className="day">
                    {props.daysWeek[dayInTheMonth.getDay()]}
                  </p>
                  <button
                    onClick={() => {
                      if (
                        !collectionOfEvents ||
                        collectionOfEvents.events.length <= 0
                      )
                        return setMenuContext({
                          selectedDay: dayInTheMonth.getDate()
                        })
                      setMenuContext({
                        ctx: collectionOfEvents,
                        selectedDay: dayInTheMonth.getDate()
                      })
                    }}
                    style={
                      isActualDay
                        ? { border: `3px solid ${theme.color.primaryColor}` }
                        : {
                            ...actualDayBorder,
                            ...midDayBorder,
                            ...firstDayBorder
                          }
                    }
                  >
                    <small className="day-number">
                      {isActualDay ? 'Hoje' : dayInTheMonth.getDate()}
                    </small>
                    <p className="day-text">{displayText}</p>
                  </button>
                </li>
              )
            })
          )}
        </ul>
        <button className="carousel-btn right" onClick={onRightClick}>
          <FaAngleRight />
        </button>
      </div>

      <div className="info">
        {menuContext.ctx ? (
          <div className="wrapper">{props.onOpenMenu(menuContext.ctx)}</div>
        ) : (
          <div className="not-found">
            <Image
              src="/img/common/descansando.svg"
              width={300}
              height={300}
              alt="Pessoas descansando"
              priority
            />
            <h3>Hora do descanso!</h3>
            <p>
              {props.emptyListMessage ??
                `Você não tem compromissos no dia ${menuContext.selectedDay}.`}
            </p>
          </div>
        )}
      </div>
    </MobileCalendarStyle>
  )
}
