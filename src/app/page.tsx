"use client";

import ReactLenis from "lenis/react";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureBento, { type FeatureCard } from "@/components/sections/feature/FeatureBento";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { Zap, Shield, Rocket, Target, Sparkles, Crown, Mail, Users, Layers, Code, BookOpen, Award, MessageSquare, TrendingUp, CreditCard, Calendar, DollarSign, Building, Globe } from "lucide-react";

export default function SaasTemplatePage() {
    const navItems = [
        { name: "الدورات", id: "features" },
        { name: "الاشتراكات", id: "pricing" },
        { name: "عن الأكاديمية", id: "about" },
        { name: "تواصل معنا", id: "contact" }
    ];

    const avatars = [
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=iux7fn", alt: "طالب 1" },
        { src: "http://img.b2bpic.net/free-photo/hand-holding-letter_53876-47240.jpg", alt: "طالب 2" },
        { src: "http://img.b2bpic.net/free-photo/hands-holding-letter-t_53876-63671.jpg", alt: "طالب 3" },
        { src: "http://img.b2bpic.net/free-photo/grass-letter-h-alphabet-d-design-isolated-transparent-background_169016-57085.jpg", alt: "طالب 4" }
    ];

    const features: FeatureCard[] = [
        {
            bentoComponent: "globe",            title: "وصول عالمي",            description: "تعلم من أي مكان وفي أي وقت، وانضم إلى مجتمع تعليمي دولي."
        },
        {
            bentoComponent: "marquee",            variant: "text",            centerIcon: Zap,
            texts: ["جودة عالية", "تفاعلية", "مرونة", "تطبيق عملي", "دعم فردي"],
            title: "محتوى تعليمي متميز",            description: "دورات مصممة بعناية لتقديم أقصى قيمة وتطبيق عملي."
        },
        {
            bentoComponent: "3d-stack-cards",            items: [
                { icon: Users, title: "مدربون خبراء", subtitle: "قادة الصناعة", detail: "تعلم من أفضل المتخصصين" },
                { icon: Layers, title: "محتوى متجدد", subtitle: "دائم التحديث", detail: "واكب أحدث التطورات" },
                { icon: Sparkles, title: "تطبيقات عملية", subtitle: "مشاريع واقعية", detail: "اكتسب خبرة عملية" }
            ],
            title: "تجربة تعليمية متكاملة",            description: "نجمع بين النظرية والتطبيق لضمان فهم عميق واكتساب مهارات حقيقية."
        }
    ];

    return (
        <ThemeProvider defaultButtonVariant="hover-bubble" defaultTextAnimation="entrance-slide" borderRadius="pill" contentWidth="medium" sizing="medium" background="none" cardStyle="gradient-bordered" primaryButtonStyle="primary-glow" secondaryButtonStyle="layered" headingFontWeight="medium">
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="أكاديمية SaaS"
                    button={{ text: "اشترك الآن", href: "#pricing" }}
                />
                <HeroCentered
                    background={{ variant: "rotated-rays-animated-grid" }}
                    avatars={avatars}
                    avatarText="أكثر من 5000 طالب يطورون مهاراتهم"
                    title="أطلق إمكاناتك في SaaS مع دوراتنا الاحترافية"
                    description="محتوى حصري ومُدرّبون خبراء لمساعدتك على إتقان أحدث تقنيات وتطبيقات SaaS. انضم إلى مجتمعنا التعليمي اليوم!"
                    buttons={[
                        {
                            text: "استكشف الدورات",                            href: "#features"
                        },
                        {
                            text: "اشترك الآن",                            href: "#pricing"
                        }
                    ]}
                    marqueeItems={[
                        { type: "text-icon", text: "مدربون خبراء", icon: Users },
                        { type: "text-icon", text: "محتوى متجدد", icon: Layers },
                        { type: "text-icon", text: "شهادات معتمدة", icon: Crown },
                        { type: "text-icon", text: "دعم مستمر", icon: Mail },
                        { type: "text-icon", text: "مرونة التعلم", icon: Zap }
                    ]}
                />
                <FeatureBento
                    features={features}
                    animationType="none"
                    tag="لماذا نحن"
                    title="لماذا تختار أكاديمية SaaS؟"
                    description="نقدم لك تجربة تعليمية فريدة ومصممة خصيصًا لتلبية احتياجات سوق العمل المتغيرة في مجال SaaS."
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
                <FeatureBorderGlow
                    tag="ميزات دوراتنا"
                    tagIcon={BookOpen}
                    title="مسارك نحو التميز في عالم SaaS"
                    description="دوراتنا مصممة بعناية لتناسب جميع المستويات، من المبتدئين إلى المحترفين، مع التركيز على المهارات الأكثر طلبًا."
                    animationType="slide-up"
                    textboxLayout="default"
                    useInvertedBackground={false}
                    features={[
                        {
                            icon: Award,
                            title: "شهادات احترافية",                            description: "احصل على شهادات معتمدة تعزز مسيرتك المهنية."
                        },
                        {
                            icon: MessageSquare,
                            title: "دعم مباشر",                            description: "تواصل مع المدربين والزملاء للحصول على المساعدة."
                        },
                        {
                            icon: Globe,
                            title: "مرونة التعلم",                            description: "تعلم بالوتيرة التي تناسبك وفي أي وقت ومن أي مكان."
                        },
                        {
                            icon: TrendingUp,
                            title: "تطوير مستمر",                            description: "مناهج متجددة تواكب أحدث اتجاهات صناعة SaaS."
                        }
                    ]}
                />
                <TestimonialCardFifteen
                    testimonial="منصة رائعة! تمكنت من تطوير مهاراتي في SaaS بشكل كبير بفضل المحتوى الاحترافي والمدربين المتميزين. أنصح بها بشدة لكل من يرغب في التعلم والتطور."
                    rating={5}
                    author="ليلى أحمد، محلل SaaS"
                    avatars={[
                        { src: "http://img.b2bpic.net/free-photo/student-holding-cup-coffee-while-listening-her-teacher-video-call-conference-laptop-computer-woman-studying-communication-information-using-e-learning-college-platform_482257-17317.jpg", alt: "صورة ليلى أحمد" }
                    ]}
                    ratingAnimation="slide-up"
                    avatarsAnimation="slide-up"
                    useInvertedBackground={false}
                />
                <PricingCardEight
                    tag="خطط الاشتراك"
                    tagIcon={CreditCard}
                    title="اختر خطتك لتبدأ رحلتك التعليمية"
                    description="جميع خططنا تمنحك وصولاً غير محدود إلى مكتبة الدورات المتجددة والدعم المستمر."
                    animationType="opacity"
                    textboxLayout="default"
                    useInvertedBackground={false}
                    plans={[
                        {
                            id: "monthly",                            badge: "الاشتراك الشهري",                            badgeIcon: Calendar,
                            price: "$49/شهر",                            subtitle: "وصول كامل لكل الدورات",                            buttons: [
                                { text: "اشترك شهريًا", href: "#" }
                            ],
                            features: [
                                "وصول غير محدود لكل الدورات",                                "مشاريع تطبيقية",                                "دعم مجتمعي",                                "شهادات إتمام الدورات"
                            ]
                        },
                        {
                            id: "annual",                            badge: "الاشتراك السنوي",                            badgeIcon: DollarSign,
                            price: "$399/سنة",                            subtitle: "الأكثر توفيرًا، وصول لمدة عام",                            buttons: [
                                { text: "اشترك سنويًا", href: "#" }
                            ],
                            features: [
                                "كل ميزات الاشتراك الشهري",                                "جلسات استشارية فردية (مرة)",                                "وصول مبكر للدورات الجديدة",                                "دعم فني متميز"
                            ]
                        },
                        {
                            id: "enterprise",                            badge: "للمؤسسات",                            badgeIcon: Building,
                            price: "اتصل بنا",                            subtitle: "حلول مخصصة لفرق العمل",                            buttons: [
                                { text: "تواصل مع المبيعات", onClick: () => console.log("Enterprise clicked") }
                            ],
                            features: [
                                "كل ميزات الاشتراك السنوي",                                "تدريب مخصص للفرق",                                "تقارير تقدم الفريق",                                "دعم مخصص للمؤسسات",                                "خصومات خاصة للمجموعات الكبيرة"
                            ]
                        }
                    ]}
                />
                <ContactCenter
                    tag="تواصل معنا"
                    tagIcon={Mail}
                    title="انضم إلى أكاديمية SaaS اليوم!"
                    description="لا تفوت فرصة تطوير مسيرتك المهنية في مجال SaaS. ابدأ التعلم واكتسب المهارات التي تحتاجها للنجاح."
                    background={{ variant: "animated-grid" }}
                    useInvertedBackground={false}
                    inputPlaceholder="أدخل بريدك الإلكتروني"
                    buttonText="ابدأ التعلم الآن"
                    termsText="بالضغط على 'ابدأ التعلم الآن' أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا."
                />
                <FooterBaseReveal
                    logoText="أكاديمية SaaS"
                    columns={[
                        {
                            title: "الدورات",                            items: [
                                { label: "جميع الدورات", href: "#features" },
                                { label: "مسارات تعليمية", href: "#" },
                                { label: "المدربون", href: "#" },
                                { label: "الأسئلة الشائعة", href: "#" }
                            ]
                        },
                        {
                            title: "الأكاديمية",                            items: [
                                { label: "عن الأكاديمية", href: "#about" },
                                { label: "مدونتنا", href: "#" },
                                { label: "الوظائف", href: "#" },
                                { label: "تواصل معنا", href: "#contact" }
                            ]
                        },
                        {
                            title: "الدعم",                            items: [
                                { label: "مركز المساعدة", href: "#" },
                                { label: "سياسة الاسترجاع", href: "#" },
                                { label: "المنتدى", href: "#" },
                                { label: "حالة الخدمة", href: "#" }
                            ]
                        },
                        {
                            title: "قانوني",                            items: [
                                { label: "سياسة الخصوصية", href: "#" },
                                { label: "شروط الخدمة", href: "#" },
                                { label: "سياسة الكوكيز", href: "#" }
                            ]
                        }
                    ]}
                    copyrightText="2024 أكاديمية SaaS. جميع الحقوق محفوظة."
                />
            </ReactLenis>
        </ThemeProvider>
    );
}