'use client';

export default function Reviews() {
  const reviews = [
    {
      title: "Oppenheimer",
      poster: "/images/oppenheimer.jpg",
      rating: 9,
      hotTake: "Nolan finally learned how to write dialogue. Also, Cillian Murphy's eyes should win an Oscar.",
      longReview: null
    },
    {
      title: "Columbus",
      poster: "/images/columbus.jpg",
      rating: 7.5,
      hotTake: "Excellent movie, and it particularly shines in its ability to take simple day-to-day insecurities and connect them to the romance between the two characters. Slightly bland with poor pacing.",
      longReview: null
    },
    {
      title: "Chungking Express",
      poster: "/images/chungking_express.jpg",
      rating: 8.5,
      hotTake: "Yes I watched a dubbed version of this movie. Sue me. Anyways some of the best cinematography i have ever seen. Wong Kar-Wai sadly never made a better movie before or after this, so this is truly his Magnum Opus",
      longReview: null
    },
    {
      title: "The Truman Show",
      poster: "/images/truman_show.jpg",
      rating: 8,
      hotTake: "The best part of the movie isn't the concept, the acting, or the filming itself. It's the experiential nature of the film, where you are Truman, and the story's canvas draws a direct connection to the audience. Jim Carrey managed to make a movie with everyday expressions throughout, huge.",
      longReview: null
    },
    {
      title: "Swades",
      poster: "/images/swades.jpg",
      rating: 9.5,
      hotTake: "My first Bollywood review. Most people think of Shah Rukh Khan, and this is not a passing thought in their minds as one of his notable works. However, portraying a character that completely departs from his cinematic mould, uncharming, moody, and frankly monotone, audiences for the first time see Khan the artist, not the actor. Truly hope bollywood would shive towards works like this, however, finances would never support that.",
      longReview: null
    },
    {
      title: "The Curious Case of Benjamin Button",
      poster: "/images/benjamin_button.jpg",
      rating: 7.0,
      hotTake: "This was a HARD rating. It's a movie I come back to every so often, and I think the more I reflect, the harder it is to claim that it is perfect. Yes, an inversion of the Forrest Gump life arc, the main struggle of the movie is maintaining a cohesive feel, the way, despite the years, we saw the world through Forrest's eyes. Nevertheless, Brad Pitt at his best, and will always be a personal favorite.",
      longReview: null
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-blue-400';
    if (rating >= 7) return 'text-yellow-400';
    if (rating >= 6) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 content-slide-in">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              MOVIE REVIEWS
            </h1>
            <p className="text-xl font-inter text-text/60 max-w-3xl mx-auto leading-relaxed">
              My hot takes on the latest films. Because apparently watching movies and having opinions 
              qualifies as content creation now.
            </p>
          </div>

          {/* Featured Movie */}
          <div className="mb-16 content-slide-up">
            <h2 className="text-3xl font-space font-bold text-gradient text-center mb-8">
              FEATURED REVIEW
            </h2>
            <div className="bg-surface/50 backdrop-blur-md rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Featured Poster */}
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img 
                    src="/images/jerry_maguire.jpg"
                    alt="Jerry Maguire"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl font-space font-bold text-green-400">
                      10
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-inter font-medium rounded-full mb-3">
                      FEATURED
                    </span>
                    <h3 className="text-3xl font-space font-bold text-primary mb-4">
                      Jerry Maguire
                    </h3>
                    <p className="text-text/70 font-inter text-lg leading-relaxed mb-6">
                      Truly the best movie of all time. One cannot convince me otherwise.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="group bg-surface/50 backdrop-blur-md rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg content-slide-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {/* Poster */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={review.poster} 
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    <span className={`text-lg font-space font-bold ${getRatingColor(review.rating)}`}>
                      {review.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    {review.title}
                  </h3>
                  <p className="text-text/70 font-inter text-sm leading-relaxed mb-4">
                    {review.hotTake}
                  </p>
                  
                  {review.longReview && (
                    <a
                      href={review.longReview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-inter font-medium text-sm hover:text-primary/80 transition-colors duration-200"
                    >
                      Read Full Review
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 max-w-2xl mx-auto content-slide-up">
              <h3 className="text-2xl font-space font-bold text-gradient mb-4">
                MORE REVIEWS COMING SOON
              </h3>
              <p className="text-text/70 font-inter mb-6">
                Recently told I should make a Letterboxd, well, not true; I have been told time and time again, but I never had the energy to do it. I will try to keep up with this one.
              </p>
              <a
                href="https://letterboxd.com/Rishab_Ghoshh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200"
              >
                Follow on Letterboxd
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 