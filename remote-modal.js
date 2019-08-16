import request from 'oc-request';
import Modal from '@lovata/modal';

export default new class RemoteModal {
  constructor() {
    this.loadedPartials = {};
    this.loadingModal = false;
  }

  load(partials, callback) {
    const partialsArray = Array.isArray(partials) ? partials : partials.split();
    const partialsObject = partialsArray.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = '@body';

      return accumulator;
    }, {});

    this.loadingModal = true;
    request.sendData('onAjax', {
      update: partialsObject,
      success: () => {
        this.loadingModal = false;
        Modal.showHashed();
        if (callback) callback();
      },
    });
  }

  show(partial, callback) {
    if (this.loadingModal) return;

    if (partial in this.loadedPartials) {
      Modal.show(this.loadedPartials[partial]);
    } else {
      this.load(partial, () => {
        if (!Modal.activeModal) {
          const loadedModalId = document.body.lastChild.id;

          Modal.show(loadedModalId);
          this.loadedPartials[partial] = loadedModalId;
        }

        if (callback) callback();
      });
    }
  }

  addClickListener(element, partial, callback) {
    let listenerArray = [];

    if (typeof element === 'string') {
      listenerArray = [...document.querySelectorAll(element)];
    } else {
      listenerArray.push(element);
    }

    listenerArray.forEach((listener) => {
      listener.addEventListener('click', () => {
        this.show(partial, callback);
      });
    });
  }
}();
