import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {MainLayout} from "../components/MainLayout";
import Image from "next/image";
import success from "../assets/svg/happy_2.svg";
import Link from "next/link";

export default function ThanksTestDrive(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <MainLayout title={t.thanks_test_drive.title}>
            <div className={router.locale === 'en' ? 'content has-en-lms-background' : 'content has-ru-lms-background'}>
                <div className="container box pb-6">
                    <div className="columns">
                        <div className="column">
                            <div className="success-checkmark mt-6">
                                <div className="check-icon">
                                    <span className="icon-line line-tip"/>
                                    <span className="icon-line line-long"/>
                                    <div className="icon-circle"/>
                                    <div className="icon-fix"/>
                                </div>
                            </div>
                            <div className="content has-text-centered-desktop mt-6">
                                <h2 className="title">
                                    {t.thanks_test_drive.title}
                                </h2>
                                <h3 className='subtitle mt-6'>
                                    {t.thanks_test_drive.subtitle}
                                </h3>
                                <p>
                                    <Link href="/">
                                        <a className='violet-text'>
                                            {t.goBackBtnText}
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                                <Image className="image is-1by3" src={success} alt='success'/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}