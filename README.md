This is a [VueJS](https://vuejs.org/) project that integrates [Mercury Chat](https://mercurychat.io/), a Cardano wallet communication platform!

This repository serves as an example to showcase how you can embed Mercury Chat into your Cardano DAPP. This example works for both Typescript and Javascript frontends.

</br />

## Integration

To get Mercury Chat in your application, we will need to install the [Mercury Chat React Package](https://www.npmjs.com/package/@mercury-chat/react-chat):

```bash
npm install @mercury-chat/vue-chat
```

<b>Note</b>: You can also use yarn, or pnpm to install the package.

After this we need to add these lines of code to our application:

main.ts:
```
import plugin from '@mercury-chat/vue-chat'; // Package import
import '@mercury-chat/vue-chat/dist/mercury-chat.css'; // CSS import required

createApp(App).use(plugin).mount('#app') // We need to add the .use(plugin)
```

.vue file:
```
<MercuryChat />
```

And we're done! Congratulations you have successfully added Mercury Chat to your Cardano Dapp!

<br />

## Options
There are some options allow you to customize the Mercury Chat experience. Below is an example of the options that can be used. The full option documentation can be found in the [Mercury Chat NPM Page](https://www.npmjs.com/package/@mercury-chat/vue-chat)

```
<MercuryChat position='bottom-right' :hasFullscreen='false' :showBackground='false' />
```

<br />

## Running This Repository

If you would like to test our the Mercury Chat functionality within this repo, clone the repo and then run the development server:

```bash
npm run dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) with your browser to see the result.

And that's it! Play around the ```<MercuryChat />``` component's properties until you have the functionality that you like!