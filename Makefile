install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

start-brain-even:
	npx npx babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
