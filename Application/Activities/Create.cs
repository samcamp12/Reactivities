using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        /// query return data, command don't
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
                
                /// add a void return value
                return Unit.Value;
            }
        }
    }
}