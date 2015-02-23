all: ts

ts:
	@tsc -m commonjs -t ES5 --noImplicitAny --outDir `pwd` ts/**/*.ts

.PHONY: ts
