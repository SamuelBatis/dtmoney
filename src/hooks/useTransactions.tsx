import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // outra forma é utilizando o pick, porem é necessario passar quais vc quer na tipagem 

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

 const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    )

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(TransactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...TransactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return(
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}


export function useTransactions() {
    const context = useContext(TransactionContext)

    return context
}