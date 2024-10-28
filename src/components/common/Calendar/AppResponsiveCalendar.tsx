import { ReactNode, useState, useEffect, SetStateAction, Dispatch } from 'react'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { AppDesktopCalendar } from './AppDesktopCalendar'
import { AppMobileCalendar } from './AppMobileCalendar'
import { AppCalendarLoadStyle } from './AppCalendarLoadStyle'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { SpinnerLoading } from '../Loadings/SpinnerLoading'

export interface CalendarContextProps<T extends CalendarEventEntity> {
  isOpen?: boolean
  ctx?: CollectionEventsOnDay<T>
  selectedDay?: number
}

interface AppCalendarProps<T extends CalendarEventEntity> {
  onOpenMenu: (item: CollectionEventsOnDay<T>) => ReactNode
  list: CollectionEventsOnDay<T>[]
  messageBuilder?: (eventsLength: number) => string
  mobileEmptyListMessage?: string
  sideMenuContext?: CalendarContextProps<T>
  setSideMenuContext?: Dispatch<SetStateAction<CalendarContextProps<T>>>
}

const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export function AppResponsiveCalendar<T extends CalendarEventEntity>(
  props: AppCalendarProps<T>
) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>()

  useEffect(() => {
    const setCalendar = () => {
      if (window.innerWidth < 1000) return setIsMobile(true)
      return setIsMobile(false)
    }
    addEventListener('resize', setCalendar)
    setCalendar()
  }, [])

  if (isMobile)
    return (
      <AppMobileCalendar
        daysWeek={daysWeek}
        messageBuilder={props.messageBuilder}
        emptyListMessage={props.mobileEmptyListMessage}
        {...props}
      />
    )
  else if (isMobile === false)
    return (
      <AppDesktopCalendar
        daysWeek={daysWeek}
        {...props}
        messageBuilder={props.messageBuilder}
      />
    )
  else
    return (
      <AppCalendarLoadStyle>
        <SpinnerLoading className="load" />
        <h3>Aguarde!</h3>
        <p>Estamos carregando sua rotina...</p>
      </AppCalendarLoadStyle>
    )
}
