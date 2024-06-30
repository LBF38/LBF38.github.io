import path from 'node:path';
import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields: ComputedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/').split('.')[0]
	},
	slugFull: {
		type: 'string',
		resolve: (doc) => `/${doc._raw.flattenedPath}`
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

export const WorkExperience = defineDocumentType(() => ({
	name: 'WorkExperience',
	filePathPattern: `work_experiences/**/*.md`,
	fields: {
		title: {
			type: 'string',
			required: true
		},
		description: {
			type: 'string',
			required: true
		}
	},
	computedFields
}));

export default makeSource({
	contentDirPath: './src/content',
	documentTypes: [WorkExperience],
	disableImportAliasWarning: true
});
