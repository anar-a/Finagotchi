'use client'

import {Button} from '@nextui-org/react'
import Image from 'next/image'
import AddIcon from '../../../public/buttonIcons/add-64.png';
import { useState } from 'react';
import AddTransactionModal from '@/components/modals/AddTransaction';


export default function button(props: any) {
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
      setShowModal(!showModal);
    }

    return (
        <div>
          <Button 
            className="bg-gradient-to-tr from-blue-600 to-purple-600 mt-15"
            aria-label="Budget"
            style={{maxWidth: '3.75rem', maxHeight: '3.75rem', minWidth: '3.75rem', minHeight: '3.75rem'}}
            radius='full'
            onClick={toggleModal}>
            
            <Image src={ AddIcon } width={ 100 } alt="Add Icon for Add a Budget Button"></Image>
          </Button>

          {showModal && <AddTransactionModal budgets={props.budgets} toggleModal={toggleModal} />}
        </div>
    )
}