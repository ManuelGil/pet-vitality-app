import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1676081998830 implements MigrationInterface {
  name = 'init1676081998830';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "clients" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100), "last_name" character varying(100), "email" character varying(320) NOT NULL, "phone" character varying(25), "address" character varying(100), "address_details" character varying(100), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_189b0ac4aae6353359730759d9d" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "procedure_categories" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, CONSTRAINT "PK_f2646bbbca3abd888d6af645d5a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "procedures" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" BIGSERIAL NOT NULL, "diagnostic" text, "treatment" text, "description" text, "category_id" integer, "pet_uuid" uuid, CONSTRAINT "PK_e7775bab78f27b4c47580b6cb4b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."pets_gender_enum" AS ENUM('female', 'male')`,
    );
    await queryRunner.query(
      `CREATE TABLE "pets" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "race" character varying(100), "gender" "public"."pets_gender_enum" NOT NULL DEFAULT 'female', "birht" date NOT NULL DEFAULT now(), "photo" character varying(255), "client_uuid" uuid, CONSTRAINT "PK_28e83e09e78492bb91ca13279eb" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'doctor')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, "first_name" character varying(100), "last_name" character varying(100), "email" character varying(320) NOT NULL, "phone" character varying(25), "role" "public"."users_role_enum" NOT NULL DEFAULT 'doctor', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointments" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" BIGSERIAL NOT NULL, "proposite" character varying(100), "description" text, "schedule_at" date NOT NULL, "pet_uuid" uuid, "user_uuid" uuid, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "procedures" ADD CONSTRAINT "FK_4f8bf48c837fedc07c18e0f194d" FOREIGN KEY ("category_id") REFERENCES "procedure_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "procedures" ADD CONSTRAINT "FK_496c80da8dfb62c83d29965d17b" FOREIGN KEY ("pet_uuid") REFERENCES "pets"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "pets" ADD CONSTRAINT "FK_9c335c5bd8b4e97abece629ef58" FOREIGN KEY ("client_uuid") REFERENCES "clients"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_8b9ace58ba951fe14924bce461e" FOREIGN KEY ("pet_uuid") REFERENCES "pets"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD CONSTRAINT "FK_1b76c4e9e9c748e3b7c83a2e5de" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_1b76c4e9e9c748e3b7c83a2e5de"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP CONSTRAINT "FK_8b9ace58ba951fe14924bce461e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pets" DROP CONSTRAINT "FK_9c335c5bd8b4e97abece629ef58"`,
    );
    await queryRunner.query(
      `ALTER TABLE "procedures" DROP CONSTRAINT "FK_496c80da8dfb62c83d29965d17b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "procedures" DROP CONSTRAINT "FK_4f8bf48c837fedc07c18e0f194d"`,
    );
    await queryRunner.query(`DROP TABLE "appointments"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    await queryRunner.query(`DROP TABLE "pets"`);
    await queryRunner.query(`DROP TYPE "public"."pets_gender_enum"`);
    await queryRunner.query(`DROP TABLE "procedures"`);
    await queryRunner.query(`DROP TABLE "procedure_categories"`);
    await queryRunner.query(`DROP TABLE "clients"`);
  }
}
