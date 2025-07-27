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
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
            MOVIE REVIEWS
          </h1>
          <p className="text-xl font-inter text-highlight/70 max-w-3xl mx-auto leading-relaxed">
            My hot takes on the latest films. Because apparently watching movies and having opinions 
            qualifies as content creation now.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="group bg-surface/50 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              {/* Poster */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={review.poster} 
                  alt={review.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  <span className={`text-lg font-space font-bold ${getRatingColor(review.rating)}`}>
                    {review.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:neon-glow transition-all duration-300">
                  {review.title}
                </h3>
                <p className="text-highlight/80 font-inter text-sm leading-relaxed mb-4">
                  {review.hotTake}
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < review.rating ? 'bg-primary' : 'bg-accent'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {review.longReview && (
                    <a
                      href={review.longReview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-inter text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="bg-surface/30 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              REVIEW STATS
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-space font-bold text-highlight">{reviews.length}</div>
                <div className="text-highlight/60 font-inter text-sm">Movies Reviewed</div>
              </div>
              <div>
                <div className="text-3xl font-space font-bold text-highlight">
                  {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
                </div>
                <div className="text-highlight/60 font-inter text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-space font-bold text-highlight">
                  {reviews.filter(r => r.rating >= 8).length}
                </div>
                <div className="text-highlight/60 font-inter text-sm">8+ Ratings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 