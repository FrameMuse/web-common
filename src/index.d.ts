declare module "kotto-web-common/@types" {
  type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
}

declare module "kotto-web-common/@types/laravel" {
  interface PaginationType<D = any> {
    current_page: number
    data: D
    to: number
    from: number
    total: number
    per_page: number
    last_page: number
    first_page_url: string
    last_page_url: string | null
    next_page_url: string | null
    prev_page_url: string | null
    path: string | null
  }
}