import { Pagination, PaginationProps } from '@nextui-org/pagination'

interface Props extends PaginationProps {}

export function AppPagination({ total, initialPage, ...props }: Props) {
  return (
    <Pagination
      color="secondary"
      total={total ?? 5}
      initialPage={initialPage ?? 1}
      {...props}
    />
  )
}
