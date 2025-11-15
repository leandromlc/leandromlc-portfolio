const ColumnSidebar = () => (
  <aside className="md:col-span-1 md:column-divider-left">
    <div className="mb-8 pt-2">
      <div className="space-y-2">
        <a
          href="https://www.linkedin.com/in/leandromlc"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif-body text-lg text-ink-black hover:text-faded-gray hover:underline block"
        >
          • LinkedIn Profile
        </a>
        <a
          href="mailto:lourenco.contato1@gmail.com"
          className="font-serif-body text-lg text-ink-black hover:text-faded-gray hover:underline block"
        >
          • Email (lourenco.contato1)
        </a>
      </div>
    </div>

    <hr className="hr-bold" />

    <div className="mb-8">
      <h3 className="font-serif-headline text-2xl font-bold mb-4 border-b border-ink-black pb-2">
        Detailed Technical Report
      </h3>
      <table className="w-full text-sm font-serif-body border-collapse">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              Languages
            </td>
            <td className="border border-gray-400 p-2">
              Python • TypeScript • JavaScript
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              Frontend
            </td>
            <td className="border border-gray-400 p-2">React • Next.js</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              Scraping
            </td>
            <td className="border border-gray-400 p-2">
              BeautifulSoup • Curl_Cffi • Rnet • Camoufox
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              Backend
            </td>
            <td className="border border-gray-400 p-2">
              FastAPI • Requests • Pandas • Proxy rotation
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              Cloud/Infra
            </td>
            <td className="border border-gray-400 p-2">
              Cloud Run Jobs • Cloud Storage • BigQuery • Compute Engine VMs
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 align-top font-semibold small-caps">
              CI/CD
            </td>
            <td className="border border-gray-400 p-2">
              GitHub Actions • Docker • Linux • Git
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="hr-bold" />

    <div>
      <h3 className="font-serif-headline text-2xl font-bold mb-4 border-b border-ink-black pb-2">
        My Current Studies
      </h3>
      <p className="text-md font-serif-body text-faded-gray mb-3">
        I'm always looking to learn more, currently focusing on:
      </p>
      <ul className="list-disc list-inside space-y-2 text-md font-serif-body">
        <li>Advancing in Automation and Scraping Security</li>
        <li>Optimizing Distributed Systems in the Cloud</li>
        <li>Expanding Computer Science Knowledge</li>
      </ul>
    </div>
  </aside>
);


export default ColumnSidebar;