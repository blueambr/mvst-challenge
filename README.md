## MVST Challenge

### Task's description

1. Reflect the [Design](https://www.figma.com/file/eXKRZRFUDXaXEbRq2SnikI/Coding-Challenge?node-id=2-2)
2. Render two lists (coffee and tea) with the Backend data

### How to run

| Node.js 18.\*

1. `pnpm i` or `npm i`
2. `pnpm dev` or `npm run dev`

### Implementation details

The task is implemented with Next.js, MongoDB and Tailwind CSS, meaning it is a Headless architecture without a classic Backend setup.

The repo was kickstarted using `pnpm create next-app`.

This is the data structure for `coffee`. It is the same for `tea`, but without `tags`:

![`coffee` data structure](./GitHub/coffee-data-structure.png)

### Things I would do next

- Test, that we receive data and that it is in a proper format using Vitest and c8 for coverage
- e2e test, if required, to make sure the app behaves as intended
- Implement Loading state just in case and Error states/messages to show to a user, if something goes wrong
- Divide fetch logic into utility-first approach. You can find a comprehensive example of how I did it in another project by going through [this link](https://github.com/hotepp/online-santa)
- Moving all text and static data into `.json` files in a separate folder to be able to translate it and change with ease. Potentially, move it to a Headless CMS
