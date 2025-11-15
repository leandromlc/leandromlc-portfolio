const ColumnProjects = () => (
  <div className="md:col-span-1 md:column-divider-left">
    <article>
      <h2 className="font-serif-headline text-2xl font-bold leading-tight mb-4">
        Some Recent Projects
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-serif-headline text-lg font-bold mb-2">
            Parallel Scraper Job
          </h3>

          <p className="text-md font-serif-body text-faded-gray mb-3">
            Developed a containerized Python crawler for a Cloud Run Job,
            focused on parallel task distribution and proxy management.
          </p>
        </div>

        <div>
          <h3 className="font-serif-headline text-lg font-bold mb-2">
            Advanced CI/CD Pipelines
          </h3>

          <p className="text-md font-serif-body text-faded-gray mb-3">
            Helped create and optimize automated CI/CD workflows with GitHub
            Actions, including secure storage of sensitive values to enhance
            security.
          </p>
        </div>

        <div>
          <h3 className="font-serif-headline text-lg font-bold mb-2">
            Resilient Scraping Systems
          </h3>

          <p className="text-md font-serif-body text-faded-gray mb-3">
            Developed scraping systems with re-tracking in Cloud Storage buckets
            and a microservices architecture.
          </p>
        </div>

        <div>
          <h3 className="font-serif-headline text-lg font-bold mb-2">
            Intelligent Proxy Monitoring
          </h3>

          <p className="text-md font-serif-body text-faded-gray mb-3">
            A monitoring tool dedicated to querying proxy pools, ensuring
            continuous availability and optimized performance for scraping
            operations.
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default ColumnProjects;