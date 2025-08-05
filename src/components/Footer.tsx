import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typography from './Typography';
import Card from './Card';
import Icon from './Icon';
import Input from './Input';
import Button from './Button';
import Notification from './Notification';
import { FORM_CONFIG } from '../config/form';
import { useNotification } from '../hooks/useNotification';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notification, showNotification, hideNotification } =
    useNotification();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      // FormSubmit configuration
      formDataToSend.append('_subject', 'Portfolio Contact Form - New Message');
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('source', 'Portfolio Contact Form');
      formDataToSend.append('page_url', window.location.href);

      const response = await fetch(FORM_CONFIG.FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({ name: '', company: '', email: '', message: '' });
        showNotification(
          'Message Sent Successfully!',
          "Thank you for reaching out, I'll get back to you soon.",
          'success'
        );
      } else {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`Failed to send message: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      showNotification(
        'Failed to Send Message',
        `Please try again or contact me directly at ${FORM_CONFIG.RECIPIENT_EMAIL}`,
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Notification
        isVisible={notification.isVisible}
        onClose={hideNotification}
        title={notification.title}
        message={notification.message}
        type={notification.type}
      />

      <motion.footer
        id="contact"
        className="py-16 mt-16 border-t border-neutral/20 bg-feature/10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Typography variant="heading-2" className="mb-4">
                Let's Work Together
              </Typography>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                    <Icon
                      name="mail"
                      size="md"
                      className="text-neutral-600 dark:text-neutral-400"
                    />
                  </div>
                  <div>
                    <Typography variant="body-bold" className="text-sm">
                      Email
                    </Typography>
                    <a
                      href="mailto:ruby.cuzens@gmail.com"
                      className="text-link hover:underline"
                    >
                      <Typography
                        variant="body"
                        emphasis="medium"
                        className="text-sm"
                      >
                        ruby.cuzens@gmail.com
                      </Typography>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                    <Icon
                      name="github-si"
                      size="md"
                      className="text-neutral-600 dark:text-neutral-400"
                    />
                  </div>
                  <div>
                    <Typography variant="body-bold" className="text-sm">
                      GitHub
                    </Typography>
                    <a
                      href="https://github.com/rubyfrancesgit"
                      className="text-link hover:underline"
                    >
                      <Typography
                        variant="body"
                        emphasis="medium"
                        className="text-sm"
                      >
                        @rubyfrancesgit
                      </Typography>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                    <Icon
                      name="linkedin"
                      size="md"
                      className="text-neutral-600 dark:text-neutral-400"
                    />
                  </div>
                  <div>
                    <Typography variant="body-bold" className="text-sm">
                      LinkedIn
                    </Typography>
                    <a
                      href="https://www.linkedin.com/in/ruby-doyle/"
                      className="text-link hover:underline"
                    >
                      <Typography
                        variant="body"
                        emphasis="medium"
                        className="text-sm"
                      >
                        Ruby Doyle
                      </Typography>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      label="Name *"
                      icon={<Icon name="user" size="sm" />}
                      placeholder="Your full name"
                    />

                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      label="Company"
                      icon={<Icon name="building" size="sm" />}
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    label="Email *"
                    icon={<Icon name="mail" size="sm" />}
                    placeholder="your.email@example.com"
                  />

                  <Input.Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    label="Message *"
                    icon={<Icon name="message-square" size="sm" />}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="default"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
