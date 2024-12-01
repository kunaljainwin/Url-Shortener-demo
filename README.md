# Functional Requirements:

Short URL Generation: The system should generate a unique short URL for each long URL provided by the user.

Redirection: Users visiting the short URL should be redirected to the original long URL.

Consistency: Multiple users entering the same long URL should receive the same short URL (1-to-1 mapping).

Expiration: Links should have an option to expire after a default timespan.

## Functional Requirements(optional):

Custom Alias: Optionally, users should be able to specify a custom alias for their shortened URL.

Analytics: Record analytics and metrics for redirections.

# Non-Functional Requirements:

High Availability: The system should be highly available with minimal latency.

Scalability: The system should be scalable to handle high traffic.

Efficiency: The system should be efficient in terms of read/write operations.

Security: Prevent abuse of services and ensure secure encoding of data.

Bandwidth: Estimate the bandwidth requirements based on expected traffic.

