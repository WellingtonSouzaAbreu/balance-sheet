export type Release = {
    lauchId: number // TODO
    value: number
    title: string
    position: string
    nature: string
    accountType: AccountType
}

export type MenuOptions = 'rationales' | 'balanceSheet' | 'are' | 'patrimonyBalance'

export type AccountType = 'P' | 'R' | 'D'

export type AccountInput = {
    lauchId: number
    value: number
    nature: string
}