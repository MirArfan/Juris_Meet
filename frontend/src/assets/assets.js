import appointment_img from './appointment_img1.png'
import header_img from './header_img1.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './about_image2.png'
import about_image from './about_image3.png'
import logo from './logo.svg'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import law1 from './lawyer1.jpg'
import law2 from './lawyer2.jpg'
import law3 from './lawyer3.jpg'
import law4 from './lawyer4.jpg'
import law5 from './lawyer5.jpg'
import law6 from './lawyer6.jpg'
import law7 from './lawyer7.jpg'
import law8 from './lawyer8.jpg'
import law9 from './lawyer9.jpg'
import law10 from './lawyer10.jpg'
import law11 from './lawyer11.jpg'
import law12 from './lawyer12.jpg'
import law13 from './lawyer13.jpg'
import law14 from './lawyer14.jpg'
import law15 from './lawyer15.jpg'
import law16 from './lawyer16.png'
import law17 from './lawyer17.png'
import law18 from './lawyer18.jpg'
import law19 from './lawyer19.jpg'
import law20 from './lawyer20.jpg'
import law21 from './lawyer21.jpg'
import law22 from './lawyer22.jpg'
import CriminalLawyer from './cat1.png'
import FamilyLawyer from './cat2.png'
import CorporateLawyer from './cat3.png'
import RealEstateLawyer from './cat4.png'
import ImmigrationLawyer from './cat5.png'
import TaxLawyer from './cat6.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    logo1,
    logo2,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}
export const specialityData = [
    {
        speciality: 'Criminal Lawyer',
        image: CriminalLawyer
    },
    {
        speciality: 'Family Lawyer',
        image: FamilyLawyer
    },
    {
        speciality: 'Corporate Lawyer',
        image: CorporateLawyer
    },
    {
        speciality: 'Real Estate Lawyer',
        image: RealEstateLawyer
    },
    {
        speciality: 'Immigration Lawyer',
        image: ImmigrationLawyer
    },
    {
        speciality: 'Tax Lawyer',
        image: TaxLawyer
    },
];
export const lawyers = [
    {
        _id: 'law1',
        name: 'Barrister Arafat Rahman',
        image: law1,
        speciality: 'Criminal Lawyer',
        degree: 'LL.B, LL.M',
        experience: '10 Years',
        about: 'Barrister Arafat Rahman is an experienced criminal defense lawyer dedicated to protecting the rights of his clients. With a decade of legal practice, he has successfully defended numerous cases involving serious criminal charges. His expertise spans across bail hearings, appeals, and ensuring due process in legal proceedings. He believes in fair representation and works tirelessly to uphold justice.',
        fees: 5000,
        address: {
            line1: 'Gulshan 1',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law2',
        name: 'Advocate Nasir Ahmed',
        image: law2,
        speciality: 'Family Lawyer',
        degree: 'LL.B',
        experience: '7 Years',
        about: 'Advocate Nasir Ahmed specializes in family law, assisting clients with sensitive legal matters such as divorce, child custody, and inheritance disputes. His approach focuses on mediation and conflict resolution to ensure a smooth legal process for families. With seven years of experience, he provides compassionate and strategic legal support to help clients navigate complex familial issues.',
        fees: 4000,
        address: {
            line1: 'Dhanmondi 32',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law3',
        name: 'Advocate Tariq Hasan',
        image: law3,
        speciality: 'Corporate Lawyer',
        degree: 'LL.B, LL.M',
        experience: '8 Years',
        about: 'Advocate Tariq Hasan is a highly skilled corporate lawyer specializing in business law, mergers, acquisitions, and contract negotiations. With eight years of legal experience, he has advised numerous startups and established enterprises on regulatory compliance, corporate structuring, and dispute resolution. His goal is to safeguard businesses by ensuring legally sound operations and minimizing risks.',
        fees: 6000,
        address: {
            line1: 'Motijheel',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law4',
        name: 'Advocate Asifur Rahman',
        image: law4,
        speciality: 'Real Estate Lawyer',
        degree: 'LL.B',
        experience: '5 Years',
        about: 'Advocate Asifur Rahman specializes in real estate law, assisting clients with property transactions, land disputes, and legal documentation. His expertise includes drafting contracts, handling lease agreements, and resolving conflicts related to land ownership. With five years of experience, he is committed to ensuring transparency and legal security in real estate dealings.',
        fees: 3500,
        address: {
            line1: 'Chittagong Court',
            line2: 'Chattogram, Bangladesh'
        }
    },
    {
        _id: 'law5',
        name: 'Advocate Mahbub Alam',
        image: law5,
        speciality: 'Tax Lawyer',
        degree: 'LL.B, LL.M',
        experience: '9 Years',
        about: 'Advocate Mahbub Alam is a seasoned tax lawyer specializing in financial regulations, corporate taxation, and tax dispute resolution. With nine years of experience, he provides legal counsel to businesses and individuals on tax planning, compliance, and audits. His expertise also includes VAT regulations and handling tax litigation cases.',
        fees: 7000,
        address: {
            line1: 'Banani',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law6',
        name: 'Barrister Rafiq Siddique',
        image: law6,
        speciality: 'Tax Lawyer',
        degree: 'LL.B, Bar-at-Law',
        experience: '12 Years',
        about: 'Barrister Rafiq Siddique is a highly experienced tax lawyer with expertise in corporate taxation, financial compliance, and tax dispute resolution. He assists businesses and individuals in navigating complex tax laws, ensuring proper tax planning, and representing clients in audits and litigation. His deep understanding of VAT regulations and international tax laws makes him a sought-after legal advisor in the field.',
        fees: 8000,
        address: {
            line1: 'Uttara',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law7',
        name: 'Advocate Fahim Muntasir',
        image: law7,
        speciality: 'Real Estate Lawyer',
        degree: 'LL.B',
        experience: '6 Years',
        about: 'Advocate Fahim Muntasir specializes in real estate law, handling property disputes, lease agreements, and land acquisition cases. With six years of experience, he provides legal support to property buyers, sellers, and investors, ensuring smooth transactions and regulatory compliance. His practice includes advising on land registration, zoning laws, and resolving boundary conflicts efficiently.',
        fees: 4500,
        address: {
            line1: 'Mirpur',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law8',
        name: 'Advocate Kamal Hossain',
        image: law8,
        speciality: 'Real Estate Lawyer',
        degree: 'LL.B',
        experience: '11 Years',
        about: 'Advocate kamal Hossain specializes in real estate law, handling property disputes, lease agreements, and land acquisition cases. With six years of experience, he provides legal support to property buyers, sellers, and investors, ensuring smooth transactions and regulatory compliance. His practice includes advising on land registration, zoning laws, and resolving boundary conflicts efficiently.',
        fees: 5500,
        address: {
            line1: 'Baridhara',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law9',
        name: 'Barrister Anwar Rahman',
        image: law9,
        speciality: 'Tax Lawyer',
        degree: 'LL.B, Bar-at-Law',
        experience: '13 Years',
        about: 'Advocate Anwar Rahman specializes in Tax Lawyer, handling property disputes, lease agreements, and land acquisition cases. With six years of experience, he provides legal support to property buyers, sellers, and investors, ensuring smooth transactions and regulatory compliance. His practice includes advising on land registration, zoning laws, and resolving boundary conflicts efficiently.',
        fees: 9000,
        address: {
            line1: 'Motijheel',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law10',
        name: 'Advocate Shifur Ahmed',
        image: law10,
        speciality: 'Immigration Lawyer',
        degree: 'LL.B, LL.M',
        experience: '10 Years',
        about: 'Advocate Shifur Ahmed is a skilled immigration lawyer helping individuals and businesses with visa applications, work permits, residency status, and citizenship matters. With ten years of experience, he has successfully represented clients in immigration appeals and asylum cases. His practice also includes advising international students, expatriates, and businesses on employment-based immigration solutions.',
        fees: 6500,
        address: {
            line1: 'Shahbagh',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law11',
        name: 'Advocate Mizanur Rahman',
        image: law11,
        speciality: 'Immigration Lawyer',
        degree: 'LL.B',
        experience: '7 Years',
        about: 'Advocate Mizanur Rahman specializes in immigration law, assisting clients with visa applications, permanent residency, and nationality concerns. With seven years of experience, he has helped numerous individuals and families navigate the complexities of immigration policies. His expertise includes family-based immigration, deportation defense, and handling legal issues related to asylum seekers and refugees.',
        fees: 4800,
        address: {
            line1: '',
            line2: 'BashundharaDhaka, Bangladesh'
        }
    },
    {
        _id: 'law12',
        name: 'Barrister Tahmid Sultan',
        image: law12,
        speciality: 'Criminal Lawyer',
        degree: 'LL.B, LL.M',
        experience: '9 Years',
        about: 'Barrister Tahmid Sultan is a highly regarded criminal defense lawyer specializing in cybercrime, fraud, and white-collar crime. With nine years of experience, he has successfully represented clients in complex criminal cases involving digital fraud, financial crimes, and data protection violations. His expertise includes defending clients in high-profile cases and providing legal counsel on cybersecurity regulations and digital rights.',
        fees: 7200,
        address: {
            line1: 'Tejgaon',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law13',
        name: 'Advocate Shafiqul Islam',
        image: law13,
        speciality: 'Criminal Lawyer',
        degree: 'LL.B, LL.M',
        experience: '12 Years',
        about: 'Advocate Shafiqul Islam is a seasoned criminal lawyer with extensive experience in handling serious criminal offenses, bail matters, and litigation defense. He has successfully represented clients in complex cases involving fraud, assault, and financial crimes. His expertise includes legal strategy development, courtroom representation, and ensuring fair trials for his clients.',
        fees: 6500,
        address: {
            line1: 'Motijheel',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law14',
        name: 'Barrister Nafis Ahmed',
        image: law14,
        speciality: 'Corporate Lawyer',
        degree: 'LL.B, LL.M',
        experience: '8 Years',
        about: 'Barrister Nafis Ahmed is a corporate law specialist advising businesses on company formation, contract negotiations, and legal compliance. With eight years of experience, he helps corporations navigate mergers, acquisitions, and business disputes. His practice also includes intellectual property rights, employment law, and regulatory affairs, ensuring legal security for companies.',
        fees: 8500,
        address: {
            line1: 'Gulshan',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law15',
        name: 'Advocate Rahat Hossain',
        image: law15,
        speciality: 'Family Lawyer',
        degree: 'LL.B',
        experience: '10 Years',
        about: 'Advocate Rahat Hossain specializes in family law, handling divorce settlements, child custody disputes, and family mediation. With a decade of experience, he provides compassionate legal assistance in domestic violence cases, alimony disputes, and inheritance claims. His goal is to ensure fair resolutions while prioritizing the best interests of families and children.',
        fees: 5000,
        address: {
            line1: 'Dhanmondi',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law16',
        name: 'Barrister Shamim Ahmed',
        image: law16,
        speciality: 'Family Lawyer',
        degree: 'LL.B, LL.M',
        experience: '7 Years',
        about: 'Barrister Shamim Ahmed is dedicated to protecting human rights and providing legal aid in social justice cases. His expertise includes handling domestic abuse cases, child welfare issues, and legal advocacy for marginalized communities. With a strong background in legal research and advocacy, he fights for fair and just outcomes in family law disputes.',
        fees: 6000,
        address: {
            line1: 'Uttara',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law17',
        name: 'Advocate Asif Mahmud',
        image: law17,
        speciality: 'Family Lawyer',
        degree: 'LL.B',
        experience: '6 Years',
        about: 'Advocate Asif Mahmud specializes in intellectual property law, assisting clients with trademarks, copyrights, and patent protection. With six years of experience, he helps businesses and individuals safeguard their creative works and inventions, handling legal disputes over intellectual property rights and infringement claims.',
        fees: 5500,
        address: {
            line1: 'Banani',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law18',
        name: 'Barrister Faruk Yamin',
        image: law18,
        speciality: 'Tax Lawyer',
        degree: 'LL.B, LL.M',
        experience: '11 Years',
        about: 'Barrister Faruk Yamin is a tax law expert, advising clients on taxation policies, VAT compliance, and financial regulations. With eleven years of experience, he assists businesses and individuals in tax planning, resolving tax disputes, and ensuring legal compliance in financial transactions. His knowledge of corporate tax laws makes him a trusted legal advisor.',
        fees: 9000,
        address: {
            line1: 'Mirpur',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law19',
        name: 'Advocate Mahbub Alam',
        image: law19,
        speciality: 'Corporate Lawyer',
        degree: 'LL.B',
        experience: '9 Years',
        about: 'Advocate Mahbub Alam specializes in labor law, handling employee rights, wrongful termination, and workplace disputes. With nine years of experience, he represents both employers and employees in legal matters related to labor contracts, discrimination claims, and workplace safety regulations. His goal is to ensure fairness and compliance in employment relationships.',
        fees: 5800,
        address: {
            line1: 'Kawran Bazar',
            line2: 'Dhaka, Bangladesh'
        }
    },
    {
        _id: 'law20',
        name: 'Barrister Jamal Uddin',
        image: law20,
        speciality: 'Real Estate Lawyer',
        degree: 'LL.B, LL.M',
        experience: '13 Years',
        about: 'Barrister Jamal Uddin is a senior real estate lawyer specializing in property disputes, land registration, and tenancy agreements. With thirteen years of experience, he assists clients in real estate transactions, housing laws, and commercial property dealings. His legal expertise helps resolve complex land disputes and ensures smooth property transfers.',
        fees: 7500,
        address: {
            line1: 'Chattogram',
            line2: 'Bangladesh'
        }
    },
    {
        _id: 'law21',
        name: 'Advocate Nufaz Jamal',
        image: law21,
        speciality: 'Corporate Lawyer',
        degree: 'LL.B',
        experience: '5 Years',
        about: 'Advocate Nufaz Jamal is an environmental law specialist, advocating for pollution control, climate change policies, and sustainable development. With five years of experience, he represents clients in environmental disputes, ensuring legal compliance in industrial and construction projects. His work focuses on protecting natural resources and enforcing environmental regulations.',
        fees: 4800,
        address: {
            line1: 'Sylhet',
            line2: 'Bangladesh'
        }
    },
    {
        _id: 'law22',
        name: 'Barrister Hamid Reza',
        image: law22,
        speciality: 'Tax Lawyer',
        degree: 'LL.B, LL.M',
        experience: '14 Years',
        about: 'Barrister Hamid Reza is a leading banking and finance lawyer specializing in banking regulations, loan agreements, and investment laws. With fourteen years of experience, he advises financial institutions, corporate clients, and individuals on loan structuring, debt recovery, and compliance with financial regulations. His expertise ensures legal security in financial transactions.',
        fees: 9200,
        address: {
            line1: 'Barishal',
            line2: 'Bangladesh'
        }
    }
    
];
