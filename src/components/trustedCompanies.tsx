import company1 from '../assets/trusted/company1.svg'
import company2 from '../assets/trusted/company2.svg'
import company3 from '../assets/trusted/company3.svg'
import company4 from '../assets/trusted/company4.svg'
import company5 from '../assets/trusted/company5.svg'
import company6 from '../assets/trusted/company6.svg'
import company7 from '../assets/trusted/company7.svg'
import company8 from '../assets/trusted/company8.svg'
import noise from '../assets/trusted/noise.png'

const companies = [company1, company2, company3, company4, company5, company6, company7, company8]

export const TrustedCompanies = () => {
  return (
    <div className="flex flex-col items-center max-md:hidden justify-center gap-5 w-full">
      <div
        style={{ backgroundImage: `url(${noise})` }}
        className="bg-clip-text text-transparent bg-center bg-no-repeat select-transparent"
      >
        <p className="text-sm font-bold">Trusted by the world’s leading businesses</p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-10 py-5 px-4 min-w-max">
          {companies.map((company, index) => (
            <div key={index} className="w-24 flex-shrink-0">
              <img src={company} alt={`Company ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

