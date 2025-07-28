'use client';

export default function Reviews() {
  const reviews = [
    {
      title: "Oppenheimer",
      poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      rating: 9,
      hotTake: "Nolan finally learned how to write dialogue. Also, Cillian Murphy's eyes should win an Oscar.",
      longReview: "https://letterboxd.com/film/oppenheimer-2023/"
    },
    {
      title: "Barbie",
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      rating: 8,
      hotTake: "Funny, smart, and actually has something to say. Also, Ryan Gosling as Ken is pure chaos.",
      longReview: null
    },
    {
      title: "Killers of the Flower Moon",
      poster: "https://image.tmdb.org/t/p/w500/aZXHjmhSSGUshLEdgsNCTH9sZ5L.jpg",
      rating: 7,
      hotTake: "Scorsese's longest movie yet, and somehow it still feels rushed. Great performances though.",
      longReview: null
    },
    {
      title: "Poor Things",
      poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      rating: 8,
      hotTake: "Emma Stone is absolutely unhinged in the best way possible. This movie is pure chaos.",
      longReview: null
    },
    {
      title: "The Holdovers",
      poster: "https://image.tmdb.org/t/p/w500/6XN2ajxEw1LauJS39uDOjGEzQjL.jpg",
      rating: 8,
      hotTake: "A perfect Christmas movie that's not really about Christmas. Paul Giamatti is a national treasure.",
      longReview: null
    },
    {
      title: "Past Lives",
      poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJImtdZnGz4JdE.jpg",
      rating: 9,
      hotTake: "A beautiful meditation on love, timing, and the roads not taken. Made me cry in public.",
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
                I watch a lot of movies. Like, a concerning amount. Follow me on Letterboxd for more hot takes
                and questionable opinions about cinema.
              </p>
              <a
                href="https://letterboxd.com/rishabghosh"
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