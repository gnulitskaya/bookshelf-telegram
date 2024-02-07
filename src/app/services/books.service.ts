import { Injectable } from '@angular/core';
const domain = '';
const domainLink = 'https://drive.google.com/drive/folders/';

export enum BookType {
  ForeignLiterature = 'foreignLiterature',
  SelfDevelopment = 'selfDevelopment',
  Dystopia = 'dystopia',
}

export interface IBook {
  id: string;
  name: string;
  description: string;
  author: string;
  image: string;
  link: string;
  type: BookType;
}

const books: IBook[] = [
  {
    id: '1',
    name: 'Творцы совпадений',
    link: '1SbXHsD1iOHD0fOC4oTri6kQ-vzPOC2U7?usp=sharing',
    image: 'assets/img/book1.png',
    description: 'Случайно разбитый стакан с вашим любимым напитком в баре, последний поезд, ушедший у вас из-под носа, найденный на улице лотерейный билет с невероятным выигрышем… Что если все случайности, происходящие в вашей жизни, кем-то подстроены? Что если «совпадений» просто не существует, а судьбы всех людей на земле находятся под жестким контролем неведомой организации? И что может случиться, если кто-то осмелится бросить этой организации вызов во имя любви и свободы?..',
    author: 'Йоав Блум',
    type: BookType.ForeignLiterature,
  },
  {
    id: '2',
    name: 'Дар. 12 ключей к внутреннему освобождению и обретению себя',
    link: '1iLWeYCwyKszCbSBb86oOnmNoo3AbSyIe?usp=sharing',
    image: 'assets/img/book2.png',
    description: '«Дар» повествует о двенадцати самых распространенных блоках сознания, включая страх, горе, гнев, вину, стыд. Автор предлагает читателю комплекс инструментов для борьбы с этими невидимыми, но от того не менее опасными врагами. В каждой главе – истории из жизни Эгер и ее пациентов. Все они становятся универсальными ключами, освобождающими нас из тюрем, которые мы создаем для себя сами.',
    author: 'Эдит Ева Эгер',
    type: BookType.SelfDevelopment,
  },
  {
    id: '3',
    name: 'Атлант расправил плечи',
    link: '1IR7U-RhrekezDNC1inGjWMtivDJzu4Rq?usp=sharing',
    image: 'assets/img/book3.png',
    description: 'К власти в США приходят социалисты и правительство берет курс на «равные возможности», считая справедливым за счет талантливых и состоятельных сделать богатыми никчемных и бесталанных. Гонения на бизнес приводят к разрушению экономики, к тому же один за другим при загадочных обстоятельствах начинают исчезать талантливые люди и лучшие предприниматели. Главные герои романа стальной король Хэнк Риарден и вице-президент железнодорожной компании Дагни Таггерт тщетно пытаются противостоять трагическим событиям. Вместо всеобщего процветания общество погружается в апатию и хаос.',
    author: 'Айн Рэнд',
    type: BookType.Dystopia,
  },
]

const genre: {name: string; id:number; type: BookType}[] = [
  {
    id: 1,
    name: 'Антиутопия',
    type: BookType.Dystopia
  },
  {
    id: 2,
    name: 'Саморазвитие',
    type: BookType.SelfDevelopment
  },
  {
    id: 3,
    name: 'Зарубежное',
    type: BookType.ForeignLiterature
  }
];

const downloadType: {name: string; id:number;}[] = [
  {
    id: 1,
    name: 'Fb2',
  },
  {
    id: 2,
    name: 'TXT',
  },
  {
    id: 3,
    name: 'PDF A4',
  },
  {
    id: 4,
    name: 'PDF A6',
  },
  {
    id: 5,
    name: 'Mobi',
  },
  {
    id: 6,
    name: 'Epub',
  }
];

function addDomainToLinkAnfImage(book: IBook) {
  return {
    ...book,
    image: domain + book.image,
    link: domainLink + book.link,
  }
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly books: IBook[] = books.map(addDomainToLinkAnfImage)
  constructor() { 
    console.log(genre);
  }

  getById(id: string) {
    return this.books.find((b) => b.id === id);
  }

  get byGroup() {
    return this.books.reduce((group: any, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }

  get getFilterNames() {
    return genre;
  }

  get getDownloadType() {
    return downloadType;
  }

}
