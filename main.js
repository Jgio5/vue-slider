var app = new Vue (
    {
    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            'https://cameranation.it/wp-content/uploads/2020/03/paesaggi.jpg',
            'https://www.raiplayradio.it/cropgd/853x480/dl/img/2018/04/26/1524742758393_paesaggio.jpg',
            'https://www.reterurale.it/flex/images/9/2/3/D.351363a0300d2b7790bd/1.jpg',
            'https://miro.medium.com/max/1200/1*Gsq1yHsb3cV2JKuj5c_SoQ.jpeg',
            'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/giappone-1080x720.jpg?v=134538'
        ]
    },

    //Scorrimento automatico
    created: function() {
        setInterval(() => {
            this.nextPhoto();
        }, 1000);
    },
    //Uso dei tasti direzionali
    created: function() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 39) {
                this.nextPhoto();
            }
            else if (e.keyCode == 37) {
                this.prevPhoto();
            }
        });
    },

    methods: {
        //foto precedente
        prevPhoto: function() {
            this.counterPhoto -= 1;

            if(this.counterPhoto < 0) {
                //
                this.counterPhoto = (this.photos.length -1);
            }
        },
        //foto successiva
        nextPhoto: function() {
            this.counterPhoto += 1;

            //0 > 0-1 = 0 > -1 ...... 5 > 5-1 4 si
            if(this.counterPhoto > (this.photos.length -1)) {
                this.counterPhoto = 0;
            }
        },
        //click sul pallino del nav
        clickCircle(index) {
            this.counterPhoto = index;
        }
    }
    });