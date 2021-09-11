import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMig1631322431852 implements MigrationInterface {
    name = 'initialMig1631322431852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Node_mysql_ts\`.\`Products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`quantity\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Node_mysql_ts\`.\`Users\` (\`userID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`money\` varchar(255) NOT NULL, PRIMARY KEY (\`userID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Node_mysql_ts\`.\`ProductPurchase\` (\`ProductoParchaseID\` int NOT NULL AUTO_INCREMENT, \`PurchaseDate\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`Total\` varchar(255) NOT NULL, \`productIDId\` int NULL, \`userIDUserID\` int NULL, UNIQUE INDEX \`REL_ea192ff1c51e02e41af94557a4\` (\`productIDId\`), UNIQUE INDEX \`REL_90ca57aae786208416fb42c6e6\` (\`userIDUserID\`), PRIMARY KEY (\`ProductoParchaseID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Node_mysql_ts\`.\`ProductPurchase\` ADD CONSTRAINT \`FK_ea192ff1c51e02e41af94557a44\` FOREIGN KEY (\`productIDId\`) REFERENCES \`Node_mysql_ts\`.\`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Node_mysql_ts\`.\`ProductPurchase\` ADD CONSTRAINT \`FK_90ca57aae786208416fb42c6e6d\` FOREIGN KEY (\`userIDUserID\`) REFERENCES \`Node_mysql_ts\`.\`Users\`(\`userID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Node_mysql_ts\`.\`ProductPurchase\` DROP FOREIGN KEY \`FK_90ca57aae786208416fb42c6e6d\``);
        await queryRunner.query(`ALTER TABLE \`Node_mysql_ts\`.\`ProductPurchase\` DROP FOREIGN KEY \`FK_ea192ff1c51e02e41af94557a44\``);
        await queryRunner.query(`DROP INDEX \`REL_90ca57aae786208416fb42c6e6\` ON \`Node_mysql_ts\`.\`ProductPurchase\``);
        await queryRunner.query(`DROP INDEX \`REL_ea192ff1c51e02e41af94557a4\` ON \`Node_mysql_ts\`.\`ProductPurchase\``);
        await queryRunner.query(`DROP TABLE \`Node_mysql_ts\`.\`ProductPurchase\``);
        await queryRunner.query(`DROP TABLE \`Node_mysql_ts\`.\`Users\``);
        await queryRunner.query(`DROP TABLE \`Node_mysql_ts\`.\`Products\``);
    }

}
