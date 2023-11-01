BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Draft] (
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Draft_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [user_id] NVARCHAR(1000),
    [form_id] NVARCHAR(1000) NOT NULL,
    [data] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Draft_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Draft_user_id_form_id_key] UNIQUE NONCLUSTERED ([user_id],[form_id])
);

-- CreateTable
CREATE TABLE [dbo].[FeedItem] (
    [created_at] DATETIME2 NOT NULL CONSTRAINT [FeedItem_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [subject] NVARCHAR(1000) NOT NULL,
    [body] NVARCHAR(1000),
    [summary] NVARCHAR(1000),
    [dismissed_at] DATETIME2,
    [user_id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [FeedItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Submission] (
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Submission_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [user_id] NVARCHAR(1000),
    [form_id] NVARCHAR(1000) NOT NULL,
    [data] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Submission_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [created_at] DATETIME2 NOT NULL CONSTRAINT [User_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [user_id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([user_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[FeedItem] ADD CONSTRAINT [FeedItem_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User]([user_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
