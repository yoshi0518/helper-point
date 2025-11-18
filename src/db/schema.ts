import { boolean, integer, pgTable, serial, smallint, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const sampleTable = pgTable('t_sample', {
  id: serial('id').primaryKey(),
  sampleColumn1: varchar('sample_column1', { length: 200 }),
  sampleColumn2: varchar('sample_column2', { length: 200 }).notNull(),
  sampleColumn3: text('sample_column3'),
  sampleColumn4: text('sample_column4').notNull(),
  sampleColumn5: smallint('sample_column5'),
  sampleColumn6: smallint('sample_column6').notNull(),
  sampleColumn7: integer('sample_column7'),
  sampleColumn8: integer('sample_column8').notNull(),
  sampleColumn9: boolean('sample_column9'),
  sampleColumn10: boolean('sample_column10').notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});
