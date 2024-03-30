import { pgTable, serial, text, doublePrecision } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	price: doublePrecision('price'),
});
