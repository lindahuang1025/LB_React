import { MigrationInterface, QueryRunner } from "typeorm";

export class InitCreate1687248621237 implements MigrationInterface {
    name = 'InitCreate1687248621237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("Id" SERIAL NOT NULL, "Headline" character varying NOT NULL, "ArticleContent" character varying NOT NULL, "PublicationDate" character varying NOT NULL, "UpdateDate" character varying NOT NULL, "Symbols" character varying NOT NULL, CONSTRAINT "PK_364eca75285640a18a84a989616" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "whole_lists" ("Id" SERIAL NOT NULL, "Symbol" character varying NOT NULL, "CompanyName" character varying NOT NULL, "Price" integer NOT NULL, "PriceChange" integer NOT NULL, "PricePercentChange" integer NOT NULL, "Volume" integer NOT NULL, "VolumePercentChange" integer NOT NULL, "Header" character varying NOT NULL, "Sector" character varying NOT NULL, "SectorRank" integer NOT NULL, "SymbolOrder" integer NOT NULL, "Story" character varying NOT NULL, "UpdateDate" character varying NOT NULL, "NearBuyPoint" boolean NOT NULL, "BuyPoint" character varying NOT NULL, "BuyRangeFrom" character varying NOT NULL, "BuyRangeTo" character varying NOT NULL, "CurrentAction" character varying NOT NULL, "LeaderboardAnalysis" character varying NOT NULL, "BackStory" character varying NOT NULL, "IsInLeaderboard" boolean NOT NULL, "RecentArticle" character varying NOT NULL, "PreviousClose" integer NOT NULL, "CheckupUrl" character varying NOT NULL, "ListName" character varying NOT NULL, "PositionSize" character varying NOT NULL, CONSTRAINT "PK_02baaabed060f5e0ac0dfe71e74" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "position_summary" ("Id" SERIAL NOT NULL, "Action" integer NOT NULL, "Symbol" character varying NOT NULL, "Position" character varying NOT NULL, "Weight" integer NOT NULL, "EntryDate" character varying NOT NULL, "Entry" integer NOT NULL, "AvgCost" integer NOT NULL, "FromEntry" integer NOT NULL, "FromAvgCost" integer NOT NULL, "Sort" integer NOT NULL, "PositionValue" integer NOT NULL, "InsertHistory" boolean NOT NULL, "IsInList" boolean NOT NULL, CONSTRAINT "PK_dabe96f313016b431f45c53b9bb" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "related_news" ("Id" SERIAL NOT NULL, "Headline" character varying NOT NULL, "ArticleContent" character varying NOT NULL, "PublicationDate" character varying NOT NULL, "UpdateDate" character varying NOT NULL, "Symbols" character varying NOT NULL, "Author" character varying NOT NULL, "Articleurl" character varying NOT NULL, "ImageUrl" character varying NOT NULL, "Image150Url" character varying NOT NULL, "Category" character varying NOT NULL, CONSTRAINT "PK_6c7590284acc1d00cf5dd8d6265" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "related_news"`);
        await queryRunner.query(`DROP TABLE "position_summary"`);
        await queryRunner.query(`DROP TABLE "whole_lists"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
    }

}
