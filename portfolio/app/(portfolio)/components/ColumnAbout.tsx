const ColumnAbout = () => (
  <div className="md:col-span-1">
    <article>
      <h2 className="font-serif-headline text-3xl md:text-4xl font-bold leading-tight mb-4">
        About Me and My Experience
      </h2>

      <p className="text-sm italic text-faded-gray mb-6 border-b border-gray-300 pb-2">
        <span className="font-bold small-caps">A BRIEF SUMMARY.</span> I enjoy
        building efficient solutions for automation and data.
      </p>

      <p className="text-lg font-serif-body leading-relaxed mb-4 drop-cap">
        With over two years of experience in technology, I have focused on
        creating scalable automation systems, efficient web scrapers, and APIs.
        My journey has been marked by building robust solutions that perform
        well in dynamic, high-demand environments.
      </p>

      <p className="text-lg font-serif-body leading-relaxed mb-4">
        I primarily use <strong className="font-semibold">Python</strong> for
        complex automations and{" "}
        <strong className="font-semibold">TypeScript/JavaScript</strong> with{" "}
        <strong className="font-semibold">React</strong> for the frontend. I
        have significant experience with the{" "}
        <strong className="font-semibold">Google Cloud Platform (GCP)</strong>{" "}
        infrastructure, using services like Cloud Run Jobs, Cloud Storage,
        BigQuery, and VMs.
      </p>

      <p className="text-lg font-serif-body leading-relaxed">
        I also have experience with{" "}
        <strong className="font-semibold">CI/CD pipelines</strong> using{" "}
        <strong className="font-semibold">GitHub Actions</strong> to automate
        deployments securely. Currently, I am pursuing a{" "}
        <strong className="font-semibold">
          Bachelor's degree in Computer Science
        </strong>{" "}
        at Cruzeiro do Sul Virtual to continue learning.
      </p>
    </article>
  </div>
);

export default ColumnAbout;