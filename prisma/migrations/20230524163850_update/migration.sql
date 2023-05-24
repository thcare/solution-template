BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Patient] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Patient_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[FeedItem] (
    [id] NVARCHAR(1000) NOT NULL,
    [subject] NVARCHAR(1000) NOT NULL,
    [body] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [FeedItem_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [dismissedAt] DATETIME2,
    [patientId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [FeedItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[FeedItem] ADD CONSTRAINT [FeedItem_patientId_fkey] FOREIGN KEY ([patientId]) REFERENCES [dbo].[Patient]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH