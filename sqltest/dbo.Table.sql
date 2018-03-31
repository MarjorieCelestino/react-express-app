CREATE TABLE [dbo].[USERS]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [name] CHAR(30) NOT NULL, 
    [email] NVARCHAR(50) NOT NULL, 
    [password] CHAR(128) NOT NULL, 
    [date-added] DATE NOT NULL
)
