import { 
  Movie,
  MovieState
}  from "./types";


// Set up a default or "initial" state for our app.
const initialState: MovieState = { 
  movies: [
    {
      movieID: 1,
      title: "The Wolf of Wall Street",
      year: 2013,
      genre: "Drama",
      imdb: "https://www.imdb.com/title/tt0993846/?ref_=rt_li_tt",
      summary: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      poster: "",  //how to link to poster??
    },
    {
      movieID: 2,
      title: "The Sum Of All Fears",
      year: 2002,
      genre: "Thriller",
      imdb: "https://www.imdb.com/title/tt0164184/?ref_=fn_al_tt_1",
      summary: "CIA analyst Jack Ryan must stop the plans of a Neo-Nazi faction that threatens to induce a catastrophic conflict between the United States and Russia's newly elected President by detonating a nuclear weapon at a football game in Baltimore, Maryland.",
      poster: "",   //how to link to poster??
    },
    {
      movieID: 3,
      title: "The Matrix",
      year: 1999,
      genre: "Science Fiction",
      imdb: "https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1",
      summary: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      poster: "",   //how to link to poster??
    },
    {
      movieID: 4,
      title: "American Hustle",
      year: 2013,
      genre: "Drama",
      imdb: "https://www.imdb.com/title/tt1800241/?ref_=rt_li_tt",
      summary: "A con man, Irving Rosenfeld, along with his seductive partner Sydney Prosser, is forced to work for a wild F.B.I. Agent, Richie DiMaso, who pushes them into a world of Jersey powerbrokers and the Mafia.",
      poster: "",    //how to link to poster??
    },
    {
      movieID: 5,
      title: "Forrest Gump",
      year: 1994,
      genre: "Comedy",
      imdb: "https://www.imdb.com/title/tt0109830/?ref_=rt_li_tt",
      summary: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      poster: "",    //how to link to poster??
    },
    {
      movieID: 6,
      title: "The Judge",
      year: 2014,
      genre: "Crime Drama",
      imdb: "https://www.imdb.com/title/tt1872194/?ref_=rt_li_tt",
      summary: "Big-city lawyer Hank Palmer returns to his childhood home where his father, the town's judge, is suspected of murder. Hank sets out to discover the truth and, along the way, reconnects with his estranged family. ",
      poster: "",    //how to link to poster??
    },
    {
      movieID: 7,
      title: "The Martian",
      year: 2015,
      genre: "Science Fiction",
      imdb: "https://www.imdb.com/title/tt1872194/?ref_=rt_li_tt",
      summary: "Big-city lawyer Hank Palmer returns to his childhood home where his father, the town's judge, is suspected of murder. Hank sets out to discover the truth and, along the way, reconnects with his estranged family.",
      poster: "",    //how to link to poster??
    },

    {
      movieID: 8,
      title: "Pulp Fiction",
      year: 2011,
      genre: "Crime",
      imdb: "https://www.imdb.com/title/tt0110912/?ref_=rt_li_i",
      summary: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster: "",    //how to link to poster??
    },

    {
      movieID: 9,
      title: "Interstellar",
      year: 2014,
      genre: "Science Fiction",
      imdb: "https://www.imdb.com/title/tt0816692/?ref_=rt_li_tt",
      summary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster: "",     //how to link to poster??
    },

    {
      movieID: 10,
      title: "Full Metal Jacket",
      year: 1987,
      genre: "War",
      imdb: "https://www.imdb.com/title/tt0093058/?ref_=rt_li_tt",
      summary: "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
      poster: "",    //how to link to poster??
    },
  ],
};
export function moviesReducer(state = initialState) {
  return state;
  }
