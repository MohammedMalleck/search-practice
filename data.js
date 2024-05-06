export let products = [];

export function loadProducts(){
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      products = [
        {
          name:'Socks'
        },
        {
          name:'Shoes'
        },
        {
          name:'Ball'
        },
        {
          name:'t-shirt'
        },
        {
          name:'iron'
        },
        {
          name:'glass'
        },
        {
          name:'toaster'
        },
        {
          name:'jacket'
        },
      ];
      resolve();
    },500);
  });
  return promise;
}