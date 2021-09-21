import { useState } from 'react';
import Modal from 'react-modal'
import { GlobaStyle } from "./styles/gobal";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionContext, TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }
    function handleCloseTransactionModal(){{
        setIsNewTransactionModalOpen(false)
    }}

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobaStyle />
    </TransactionsProvider>
  );
}