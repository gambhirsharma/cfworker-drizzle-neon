import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';

config({
	path: '.dev.vars',
});

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: 'drizzle',
		});
		console.log(`Migration complete!`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();
