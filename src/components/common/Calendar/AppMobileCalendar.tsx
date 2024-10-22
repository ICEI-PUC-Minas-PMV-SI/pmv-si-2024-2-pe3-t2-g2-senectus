import { format, getDaysInMonth } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { theme } from '../../../themes/theme'
import { ReactNode, useState, useRef, useEffect, useMemo } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { MobileCalendarStyle } from './MobileCalendarStyle'
import { CalendarContextProps } from './AppResponsiveCalendar'
import Image from 'next/image'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'

interface AppCalendarProps<T extends CalendarEventEntity> {
  daysWeek: string[]
  onOpenMenu: (item: CollectionEventsOnDay<T>) => ReactNode
  list: CollectionEventsOnDay<T>[]
}

export function AppMobileCalendar<T extends CalendarEventEntity>(
  props: AppCalendarProps<T>
) {
  const carousel = useRef<HTMLUListElement>(null)
  const [menuContext, setMenuContext] = useState<
    Omit<CalendarContextProps<T>, 'isOpen'>
  >({})

  const actualDay = useMemo(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const date = format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`
    return new Date(date)
  }, [])

  const daysInTheMonth: number[] = []
  for (let i = 1; i <= getDaysInMonth(actualDay); i++) daysInTheMonth.push(i)
  const availableRows = Math.ceil(daysInTheMonth.length / 7)

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
    if (carousel.current) {
      const currentOffset = carousel.current?.offsetWidth ?? 0
      const cardNumber = currentOffset / 96
      carousel.current.scrollLeft =
        currentOffset * (actualDay.getDate() / cardNumber) - currentOffset
    }

    const actualDayInMonth = actualDay.getDate()
    setMenuContext({
      ctx: props.list[actualDayInMonth],
      selectedDay: actualDayInMonth
    })
  }, [props.list, actualDay])

  return (
    <MobileCalendarStyle>
      <div className="calendar">
        <button className="carousel-btn left" onClick={onLeftClick}>
          <FaAngleLeft />
        </button>
        <ul ref={carousel}>
          {Array.from({ length: availableRows }).map((_, rowIndex) =>
            props.daysWeek.map((_, dayIndex) => {
              const dayInMonthIndex = dayIndex + rowIndex * 7
              const hasMoreThan32Days =
                dayInMonthIndex > daysInTheMonth.length - 1
              if (hasMoreThan32Days) {
                return <li key={uuid()} className="empty-day"></li>
              }
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

              const parsedDay = new Date(actualDay)
              parsedDay.setDate(daysInTheMonth[dayInMonthIndex])
              return (
                <li key={uuid()}>
                  <p className="day">{props.daysWeek[parsedDay.getDay()]}</p>
                  <button
                    onClick={() => {
                      const eventCollection = props.list[parsedDay.getDate()]
                      if (
                        !eventCollection ||
                        eventCollection.events.length <= 0
                      )
                        return setMenuContext({
                          selectedDay: parsedDay.getDate()
                        })
                      setMenuContext({
                        ctx: eventCollection,
                        selectedDay: parsedDay.getDate()
                      })
                    }}
                    style={
                      menuContext.selectedDay === parsedDay.getDate()
                        ? { border: `3px solid ${theme.color.primaryColor}` }
                        : {
                            ...actualDayBorder,
                            ...midDayBorder,
                            ...firstDayBorder
                          }
                    }
                  >
                    <small className="day-number">
                      {actualDay.getDate() == parsedDay.getDate()
                        ? 'Hoje'
                        : parsedDay.getDate()}
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
            />
            <h3>Hora do descanso!</h3>
            <p>Você não tem compromissos no dia {menuContext.selectedDay}.</p>
          </div>
        )}
      </div>
    </MobileCalendarStyle>
  )
}
