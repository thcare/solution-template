/*
  Warnings:

  - A unique constraint covering the columns `[user_id,form_id]` on the table `Draft` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Draft] DROP CONSTRAINT [Draft_form_id_key];

-- AlterTable
ALTER TABLE [dbo].[Draft] ADD [user_id] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[Submission] ADD [user_id] NVARCHAR(1000);

-- CreateIndex
ALTER TABLE [dbo].[Draft] ADD CONSTRAINT [Draft_user_id_form_id_key] UNIQUE NONCLUSTERED ([user_id], [form_id]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
