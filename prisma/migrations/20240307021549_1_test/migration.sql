/*
  Warnings:

  - You are about to drop the column `groceries` on the `budget` table. All the data in the column will be lost.
  - Added the required column `name` to the `budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `budget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "budget" RENAME CONSTRAINT "budget_pkey" TO "budget_pkey1";
ALTER TABLE "budget" DROP COLUMN "groceries";
ALTER TABLE "budget" ADD COLUMN "name" VARCHAR NOT NULL;
ALTER TABLE "budget" ADD COLUMN "target" REAL NOT NULL DEFAULT 0;
ALTER TABLE "budget" ADD COLUMN "user" VARCHAR NOT NULL;

-- CreateTable
CREATE TABLE "budget-old" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groceries" REAL,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" VARCHAR NOT NULL DEFAULT '',
    "amount" DECIMAL NOT NULL DEFAULT 0,
    "budget" BIGINT NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "public_transaction_budget_fkey" FOREIGN KEY ("budget") REFERENCES "budget"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
