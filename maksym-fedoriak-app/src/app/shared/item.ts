import { Comment, comments } from './comment'

export class Item{
	id:string = "";
	name:string = "";
	image:string = "";
	category:string = "";
	label:string = "";
	price:string = "";
	description:string = "";
	featured:boolean = false;
	comments:Comment[] = [];
}

export const itemsConst:Item[] = [	
    {
      id:'0',
      name:'Item 1',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:4,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa.Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'lkewdlweljlw',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    },
    {
      id:'1',
      name:'Item 2',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:1,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'Pulvinar sed sit etiam tortor molestie id volutpat nostra porta, libero eu facilisi mus efficitur quam ultrices phasellus, ipsum consectetur suscipit duis donec hendrerit praesent massa.',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    },
    {
      id:'2',
      name:'Item 3',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:2,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'Pulvinar sed sit etiam tortor molestie id volutpat nostra porta, libero eu facilisi mus efficitur quam ultrices phasellus, ipsum consectetur suscipit duis donec hendrerit praesent massa.',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    },
    {
      id:'3',
      name:'Item 4',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:3,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'Pulvinar sed sit etiam tortor molestie id volutpat nostra porta, libero eu facilisi mus efficitur quam ultrices phasellus, ipsum consectetur suscipit duis donec hendrerit praesent massa.',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    },
    {
      id:'4',
      name:'Item 5',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:4,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'Pulvinar sed sit etiam tortor molestie id volutpat nostra porta, libero eu facilisi mus efficitur quam ultrices phasellus, ipsum consectetur suscipit duis donec hendrerit praesent massa.',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    },
    {
      id:'5',
      name:'Item 6',
      image:'https://via.placeholder.com/200?text=',
      category:'A',
      label:'Item A',
      price:'200',
      description:'Some default description',
      featured:true,
      comments:[
      {
        rating:5,
        comment:'Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis rutrum at dapibus nam sagittis purus senectus, etiam semper platea malesuada maximus massa',
        author:'anon1',
        date:'2021-11-15T08:20:00.000000'
      },
      {
        rating:4,
        comment:'Gravida neque quam quisque semper taciti maximus justo, ultrices habitant odio id finibus primis auctor varius, pulvinar nisi sollicitudin tristique tortor sed.',
        author:'anon2',
        date:'2021-11-15T09:20:00.000000'
      },
      {
        rating:1,
        comment:'Rhoncus maecenas euismod pharetra scelerisque quisque a nulla fermentum himenaeos molestie eu, est per nibh aptent nec donec consectetur vulputate et magnis.',
        author:'anon3',
        date:'2021-11-15T10:20:00.000000'
      },
      {
        rating:5,
        comment:'Tempus mi fames fermentum accumsan nisl arcu elementum aenean ac montes, posuere potenti eleifend magna varius commodo quis aptent tincidunt.',
        author:'anon4',
        date:'2021-11-15T11:20:00.000000'
      },
      {
        rating:2,
        comment:'Pulvinar sed sit etiam tortor molestie id volutpat nostra porta, libero eu facilisi mus efficitur quam ultrices phasellus, ipsum consectetur suscipit duis donec hendrerit praesent massa.',
        author:'anon5',
        date:'2021-11-15T12:20:00.000000'
      },
      {
        rating:1,
        comment:'Maximus lacus dignissim congue libero fringilla tincidunt arcu, quisque penatibus inceptos dolor duis elit purus, tempor sed felis proin consectetur a.',
        author:'anon1',
        date:'2021-11-15T13:20:00.000000'
      }]
    }
];