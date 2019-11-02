export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fawler',
            price: 59,
            coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1036882959.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 42,
            coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1022168241.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(this.data)
                reject(new Error('Something bad happened'));
            }, 700);
        });
    };
    
}