import path from 'node:path';
import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import { events } from './src/lib/config';

const computedFields: ComputedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/').split('.')[0]
	},
	slugFull: {
		type: 'string',
		resolve: (doc) => `${doc._raw.flattenedPath}`
	},
	fileName: {
		type: 'string',
		resolve: (doc) => path.parse(doc._raw.sourceFilePath.split('/').slice(-1).join('/')).name
	},
	suffix: {
		type: 'string',
		resolve: (doc) => path.parse(doc._raw.sourceFilePath.split('/').slice(-1).join('/')).ext
	},
	language: {
		type: 'string',
		resolve: (doc) => doc._raw.sourceFileName.split('.')[1]
	}
};

export const Intro = defineDocumentType(() => ({
	name: 'Intro',
	description: 'A single file, for introducing myself.',
	filePathPattern: 'intro/introduction.*.md',
	contentType: 'markdown',
	fields: {
		talked_languages: {
			type: 'string',
			description: 'A list of talked languages'
		},
		location: {
			type: 'string'
		},
		hobbies: {
			type: 'string'
		}
	},
	computedFields
}));

export const CV = defineDocumentType(() => ({
	name: 'CV',
	filePathPattern: 'cv/**/*.md',
	contentType: 'markdown',
	fields: {
		title: {
			type: 'string',
			description: 'The title',
			required: true
		},
		from: {
			type: 'date',
			description: 'The starting date',
			required: true
		},
		to: {
			type: 'date',
			description: 'The ending date',
			required: true
		},
		where: {
			type: 'string',
			description: 'The company, school or institution',
			required: true
		},
		what: {
			type: 'string',
			description: 'The position or title',
			required: true
		},
		url: {
			type: 'string',
			description: 'The link to the company if needed'
		},
		img: {
			type: 'string',
			description: 'The image of the company'
		}
	},
	computedFields: {
		event: {
			type: 'enum',
			options: events,
			resolve: (doc) => doc._raw.sourceFileDir.replace('cv/', '')
		},
		...computedFields
	}
}));

export default makeSource({
	contentDirPath: './src/content',
	documentTypes: [CV, Intro],
	disableImportAliasWarning: true
});
