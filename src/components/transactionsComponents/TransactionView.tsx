'use client';
import { Card } from '@nextui-org/react';

type Transaction = {
  id: bigint,
  created_at: Date,
  name: string,
  target: number,
  user: bigint,
  spent: number,
}

interface Props {
  transaction: Transaction;
}

const TransactionView: React.FC<Props> = ({ transaction }) => {
  
  const { name } = transaction;
  const { created_at } = transaction;
  const { spent } = transaction;
  const { target } = transaction;
  
  return (
    <Card className="m-5">
      <div>
        <p>
          {name}
          {spent}
        </p>
      </div>
    </Card>
  );
}
export default TransactionView;