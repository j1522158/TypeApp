export type TransactionType = "income" | "expense";

export type IncomeType = "給与" | "副収入" | "小遣い";
export type ExpenseType = "食費" | "日用品" | "住宅費" | "光熱費";

export interface Transactions {
    id: string,
    amount: number,
    content: string,
    type: TransactionType,
    date: string,
    category: IncomeType | ExpenseType
}