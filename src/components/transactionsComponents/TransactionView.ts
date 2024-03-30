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
  t: Transaction;
}
const transactionView: React.FC<Props> = (t) => {
  return (
    <Card>
      Hello
    </Card>
  );
}
export default transactionView;