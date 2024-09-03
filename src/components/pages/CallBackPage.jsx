const CallPackPage = () => {
  function orderPizza(name, callback) {
    console.log("Zahialga huleen avlaa");
    setTimeout(function () {
      let msg = `Tanii ${name} pizza belen bolloo! Tanii pizza hurgeltend garlaa`;
      callback(msg);
    }, 3000);
  }

  orderPizza("Mahand durlagsad", printDelivery);

  function printDelivery(message) {
    console.log(message);
  }
  return <main>Call back page</main>;
};

export default CallPackPage;
