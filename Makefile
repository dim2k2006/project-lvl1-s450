install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

start-brain-even:
	npx npx babel-node -- src/bin/brain-even.js

start-brain-calc:
	npx npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
