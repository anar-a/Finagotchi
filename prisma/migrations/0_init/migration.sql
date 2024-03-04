-- CreateTable
CREATE TABLE "budget" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groceries" REAL,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

